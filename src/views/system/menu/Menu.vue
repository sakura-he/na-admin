<template>
    <div class="page" >
        <div  class="tw-mb-4">
            <NaPageHeader full title="菜单管理" subtitle="编辑全局菜单项" :show-back="false" />
        </div>
        
        <a-alert>以下操作均为模拟操作</a-alert>
        <!-- <a-spin style="width:100%" :loading="true"> -->
        <div na-loading-text="加载中" v-loading="getSystemMenuListLoading"
            class="content tw-overflow-hidden tw-mt-[10px] tw-text-c-1 tw-py-[10px] tw-bg-cbg-1 tw-rounded lg:tw-flex tw-flex-wrap">
            <!-- 左侧菜单 -->
            <div
                class="menu-tree tw-flex-grow-[1] tw-bord lg:tw-border-r lg:tw-border-b-0 tw-border-solid tw-border-cb-1 tw-pr-4 tw-px-5 tw-pb-5 tw-mb-4 tw-border-b">
                <!-- 头部 -->
                <div
                    class="tw-text-title-1 tw-items-center tw-flex tw-pb-[10px] tw-mb-2 tw-border-b tw-border-solid tw-border-cb-1">
                    <span class="tw-text-title-1 tw-leading-snug">菜单列表</span>
                    <div class="tw-ml-auto">
                        <a-button size="small" type="secondary" v-perms="['system.menus.add']">
                            添加顶级菜单
                        </a-button>
                    </div>
                </div>
                <a-tree action-on-node-click="expand" :animation="false" :data="data" block-node
                    :selected-keys="treeSelectedKeys" @update:selected-keys="onSelectedkeysUpdate" />
            </div>
            <!-- 右侧菜单详情 -->
            <div class="menu-detail tw-px-5 tw-flex-1 tw-mb-2 tw-flex-grow-[4]">
                <div
                    class="tw-text-title-1 -tw-mt-2 tw-items-center tw-justify-between tw-flex tw-flex-wrap tw-pb-[10px] tw-mb-2 tw-border-b tw-border-solid tw-border-cb-1">
                    <span class="tw-text-title-1 tw-leading-snug tw-mt-2">{{
                        ["菜单详情", "编辑菜单", "添加子菜单"][menuStatus - 1]
                    }}</span>
                    <a-button-group class="tw-mt-2" v-if="selectedMenuDetail[selectedMenuDetail.length - 1]?.meta">
                        <a-button size="small" type="secondary" @click="onEditMenu">
                            {{ menuStatus === MenuStatusEnum.edit ? "取消编辑" : "编辑菜单" }}
                        </a-button>
                        <a-button size="small" type="secondary"
                            v-if="selectedMenuDetail[selectedMenuDetail.length - 1]?.meta?.type === MenuEnum.Catelog"
                            @click="onAddMenu">
                            添加子菜单
                        </a-button>
                        <a-popconfirm content="确定要删除吗?" type="info" cancel-text="取消" ok-text="删除">
                            <a-button size="small" type="secondary" v-bind:status="'danger'" @click="onDeleteMenu">
                                删除菜单
                            </a-button>
                        </a-popconfirm>

                    </a-button-group>
                </div>
                <div>
                    <a-breadcrumb class="!tw-text-body-1 tw-mb-4">
                        <a-breadcrumb-item v-for="item in selectedMenuDetail" :key="item.name">
                            <template #droplist
                                v-if="item.meta.type === MenuEnum.Catelog && item.children && item.children.length">
                                <a-doption v-for="child in item.children">{{ child.meta.title }}</a-doption>
                            </template>
                            <DynamicIcon :icon="item.meta.icon" />
                            {{ item.meta.title }}
                        </a-breadcrumb-item>
                    </a-breadcrumb>
                </div>
                <MenuDetailForm ref="menuDetailForm" v-if="treeSelectedKeys.length" @update="onMenuDetailFormUpdate" />
                <a-alert v-else type="warning">请选择在右侧菜单树中选择菜单或点击【添加顶级菜单】进行操作 </a-alert>
            </div>
        </div>
        <!-- </a-spin> -->
    </div>
</template>

<script setup lang="ts">
import NaPageHeader from '@/components/NaPageHeader.vue';
import DynamicIcon from "@/components/DynamicIcon.vue";
import MenuDetailForm from "./components/MenuDetailForm.vue";
import { useNavigateStore } from "@/store";
import { IMenuBreadcrumb } from "@/utils/breadcrumb";
import { MenuEnum } from "@/router/type";
import { MenuStatusEnum } from "./types";
import { getSystemMenuList } from "@/api/system";
import { useRequest } from "@/hooks/useRequest";
// 后台返回的菜单数据
let menuData: Record<string, any>[] = reactive([]);
let { loading: getSystemMenuListLoading, run: getSystemMenuListRun } = useRequest(getSystemMenuList);
getSystemMenuListRun()
    .then((res) => {
        menuData.length = 0;
        menuData.push(...res.data);
    })
    .catch((err) => {
        console.log(err);
    });
let isLoading = ref(true);

const navigateStore = useNavigateStore();
// 已选择的菜单key,是个数组,由于没有开启多选,数组元素最多一个
const treeSelectedKeys = ref<Array<string | number>>([]);
const menuDetailForm = ref<InstanceType<typeof MenuDetailForm> | null>(null);
// 当前选择的菜单的详情数据和他的所有的上级菜单的数据
let selectedMenuDetail = ref<any[]>([]);
// 将asyncMenus转为a-tree组件的data prop 的类型
function menuToTree(menus: any[], floor: number[] = []) {
    return menus.map((menu, index) => {
        let newFloor = [...floor, index];
        let newMenu: Record<string, any> = {};
        newMenu.title = menu.meta.title;
        newMenu.key = newFloor.join("-");
        if (menu.meta.type === MenuEnum.Catelog) {
            newMenu.icon = () => h(DynamicIcon, { icon: menu.meta.icon, backupIcon: "icon-folder" });
        }
        if (menu.meta.type === MenuEnum.Page) {
            newMenu.icon = () => h(DynamicIcon, { icon: menu.meta.icon, backupIcon: "icon-file" });
        }
        if (menu.meta.type === MenuEnum.Button) {
            newMenu.icon = () => h(DynamicIcon, { icon: "icon-check-square" });
        }
        if (menu.children && menu.children.length) {
            newMenu.children = menuToTree(menu.children, newFloor);
        }
        return newMenu;
    });
}

// 右侧菜单状态,默认为详情模式
const menuStatus = ref(MenuStatusEnum.detail);
// 把后台返回的菜单转为tree组件需要的格式
const data = computed(() => {
    return menuToTree(menuData, []);
});
type selectCallback = (selectedKeys: (string | number)[]) => void;
let onSelectedkeysUpdate: selectCallback = (selectedKeys) => {
    treeSelectedKeys.value = selectedKeys;
    selectedMenuDetail.value = getSelectedMenuDetail(); // 更新当前选择的菜单的数据
    onDetailMenu();
};
const getSelectedMenuDetail = () => {
    let floor: string[] = [];
    function getLastMenu(menus: Record<string, any>[], floor: string[]): any[] {
        // 出栈菜单索引
        let menuIndex = Number.parseInt(floor.shift()!);
        // 如果后面还有楼层,去对应索引的菜单项的children中再次寻找
        if (floor.length) {
            return [menus[menuIndex!], ...getLastMenu(menus[menuIndex!].children, floor)];
        }
        // 如果没有剩余楼层了,出栈的菜单索引对应的子菜单项就是要找的菜单项
        return [menus[menuIndex!]];
    }
    if (treeSelectedKeys.value.length) {
        floor = (treeSelectedKeys.value as Array<string>)[0].split("-");
        return getLastMenu(menuData, floor);
    } else {
        return [];
    }
};
// 菜单进入详情状态
function onDetailMenu() {
    menuStatus.value = MenuStatusEnum.detail;
    menuDetailForm.value?.update(menuStatus.value, selectedMenuDetail.value[selectedMenuDetail.value.length - 1]);
}
function onEditMenu() {
    // 取消编辑状态,进入详情状态
    if (menuStatus.value === MenuStatusEnum.edit) {
        onDetailMenu();
        return;
    }
    // 进入编辑状态
    menuStatus.value = MenuStatusEnum.edit;
    menuDetailForm.value?.update(MenuStatusEnum.edit, selectedMenuDetail.value[selectedMenuDetail.value.length - 1]);
}
function onAddMenu() {
    menuStatus.value = MenuStatusEnum.add;
    menuDetailForm.value?.update(MenuStatusEnum.add);
}
function onDeleteMenu() { }
// 监听菜单详情在编辑之后的提交事件
function onMenuDetailFormUpdate() { }
</script>

<style scoped lang="scss">
.page {
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    padding-bottom: -10px;
    height: 100%;
}

.header {
    background-color: var(--color-bg-1);
    margin-left: calc(-1 * var(--page-pd-x));
    margin-right: calc(-1 * var(--page-pd-x));
    margin-top: calc(-1 * var(--page-pd-y));
    margin-bottom: var(--page-pd-y);
}

.arco-breadcrumb :deep(.arco-breadcrumb-item) {
    padding-left: 0 !important;
    padding-right: 0 !important;
}
</style>
