<script lang="tsx">
import { MenuEnum } from "@/router/type";
import { useUserStore } from "@/store/modules/user";
import { h, ref, resolveComponent, VNode, Ref } from "vue";
import { useRouter } from "vue-router";
import { useNavigateStore } from "@/store/modules/navigate";
import DynamicIcon from "../../components/DynamicIcon.vue";
export default defineComponent({
    setup() {
        let openMenus: string[] = reactive([]);

        let navigateStore = useNavigateStore();
        let router = useRouter();
        let menuCollapse = inject<Ref<boolean>>("menuCollapse");
        // 监听打开的菜单项数组的变化,如果改变了,更新openkeys打开的菜单
        watch(
            () => navigateStore.currentRouter2MenuTreeLevel,
            () => {
                let opendMenuKey = navigateStore.currentRouter2MenuTreeLevel.slice(0, -1).join("-");
                openMenus.length = 0; // 折叠其他菜单
                openMenus.push(opendMenuKey);
            }
        );

        //  后台返回的路由数组
        let asyncMenuListRaw = toRaw(navigateStore.asyncMenuList);
        // 点击菜单项跳转指定的路径
        function onMenuItemClick(key: string) {
            // arco返回的key的格式为 "1-2-2" 层级用-分隔; 需要获取到每层的路由对象
            // indexArr是分割后的菜单项,在父菜单中的层级索引
            let indexArr = key.split("-").map((item) => Number.parseInt(item));
            function getPath(asyncMenuListRaw: any, arr: number[]): any {
                // 判断是不是最后一层菜单,是的话返回最后一个菜单对象，不是的话，返回本次对象和递归组成的数组
                if (arr.length > 1) {
                    let currentIndex = arr.shift()!; // 记录当前层级的索引对应的路由地址(父路由路径片段),并递归寻找子级的
                    let newMenuList = asyncMenuListRaw[currentIndex].children;
                    let newArr = [...arr];  // 克隆去掉当前层级后的indexArr

                    return [asyncMenuListRaw[currentIndex], ...getPath(newMenuList, newArr)];
                } else {
                    return [asyncMenuListRaw[arr.shift() as number]];
                }
            }
            let currentFlatMenus = getPath(asyncMenuListRaw, indexArr);
            console.log(currentFlatMenus)
            if (currentFlatMenus.length) {
                let fullPath:string;
                fullPath = currentFlatMenus.map((menu: any) => ('/' + menu.path)).join('');
                router.push(fullPath)
            }

        }
        // 生成菜单项
        function createMenu(asyncMenuList: any[], floor: number[] = []) {
            return asyncMenuList.map((item, index) => {
                let newFloor = [...floor, index];
                // 如果是菜单递归获取
                if (item.meta.type === MenuEnum["Catelog"]) {
                    let nodes = createMenu(item.children, newFloor);
                    return (
                        <a-sub-menu key={newFloor.join("-")}>
                            {{
                                title: () => item.meta?.title,
                                icon: () => (
                                    <DynamicIcon
                                        icon={item.meta?.icon}
                                        backupIcon="icon-apps"
                                    />
                                ),
                                default: () => {
                                    return nodes;
                                },
                            }}
                        </a-sub-menu>
                    );
                } else {
                    return (
                        <a-menu-item key={newFloor.join("-")}>
                            {{
                                icon: () => (
                                    <DynamicIcon
                                        icon={item.meta?.icon}
                                        backupIcon="icon-apps"
                                    ></DynamicIcon>
                                ),
                                default: () => {
                                    return <span>{item.meta?.title}</span>;
                                },
                            }}
                        </a-menu-item>
                    );
                }
            });
        }

        // 菜单项jsx
        const subMenu = computed(() => {
            return createMenu(asyncMenuListRaw);
        });
        return () => (
            <div class="container">
                <a-scrollbar
                    outer-style={{
                        minHeight: 0,
                        flex: "1 1 auto",
                        overflow: "hidden",
                    }}
                    class="scrollbar__inner"
                >
                    <a-menu
                        class="menu-container"
                        model:collapsed={menuCollapse!.value}
                        show-collapse-button={false}
                        onMenuItemClick={onMenuItemClick}
                        onUpdate:openKeys={(evt: string) => {
                            openMenus.length = 0;
                            openMenus.push(...evt);
                        }}
                        selected-keys={[navigateStore.currentRouter2MenuTreeLevel.join("-")]}
                        openKeys={openMenus}
                    >
                        {subMenu.value}
                    </a-menu>
                </a-scrollbar>
            </div>
        );
    },
});
</script>
<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.menu-container {
    min-height: 100%;
    user-select: none;
}

:deep(.arco-menu-inner) {
    .arco-menu-inline-header {
        display: flex;
        align-items: center;
    }

    .arco-icon {
        &:not(.arco-icon-down) {
            font-size: 18px;
        }
    }
}

// 内层scrollbar 样式
:deep(.scrollbar__inner) {
    height: 100%;
    overflow: auto;
}
</style>
