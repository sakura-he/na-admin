<template>
    <div class="container">
        <a-tabs type="line" :hide-content="true" :editable="true" :justify="true" :active-key="currentTabIndex"
            @tab-click="onTabclick" @delete="onCloseTab" class="tabs">
            <a-tab-pane :key="tabIndex" v-for="(tab, tabIndex) in multipleTabsStore.tabs"
                :closable="!tab?.meta?.residentTab">
                <template v-slot:title>
                    <a-dropdown trigger="contextMenu">
                        <span>
                            <icon-pushpin v-if="tab?.meta.residentTab && configStore.showTabsPinIcon" />
                            <DynamicIcon v-else :icon="tab?.meta.icon" />
                            {{ tab.meta.title as string }}
                        </span>
                        <template #content>
                            <a-doption @click="onCloseRigthTabs(tabIndex)">
                                <template #icon>
                                    <icon-to-right />
                                </template>
                                <template #default>
                                    <span>关闭右侧标签页</span>
                                </template>
                            </a-doption>

                            <a-doption @click="onCloseLeftTabs(tabIndex)">
                                <template #icon>
                                    <icon-to-left />
                                </template>
                                <template #default>
                                    <span>关闭左侧标签页</span>
                                </template>
                            </a-doption>
                            <a-doption @click="onCloseOtherTabs(tabIndex)">
                                <template #icon>
                                    <icon-close />
                                </template>
                                <template #default>
                                    <span>关闭其他标签页</span>
                                </template>
                            </a-doption>
                            <a-doption @click="onCloseAllTabs(tabIndex)">
                                <template #icon>
                                    <icon-delete />
                                </template>

                                <template #default>
                                    <span>关闭全部标签页</span>
                                </template>
                            </a-doption>
                            <a-doption @click="onSwitchResidentTab(tabIndex)" v-if="!tab?.meta.noCancelResident">
                                <template #icon>
                                    <icon-unlock v-if="tab?.meta.residentTab" />
                                    <icon-pushpin v-else />
                                </template>

                                <template #default>
                                    <span>
                                        {{ tab?.meta?.residentTab ? "取消常驻标签页" : "常驻标签页" }}
                                    </span>
                                </template>
                            </a-doption>
                        </template>
                    </a-dropdown>
                </template>
            </a-tab-pane>
            <!-- 标签页选项 -->
            <template v-slot:extra>
                <a-dropdown trigger="hover">
                    <a-button size="mini">
                        <template #icon>
                            <icon-menu />
                        </template>
                    </a-button>
                    <template #content>
                        <a-doption>
                            <template #default>
                                <span>全屏内容区</span>
                            </template>
                        </a-doption>


                    </template>
                </a-dropdown>
            </template>
        </a-tabs>
    </div>
</template>

<script setup lang="ts">
import { useConfigStore } from "@/store";
import { CACHE_PREFIX, TABS_CACHE_NAME } from "@/store/modules/multipleTab/const";
import { useMultipleTabs } from "@/store/modules/multipleTab";
import { CACHE_TABS_CACHE_NAME } from '@/store/modules/multipleTab/const'
import createCache from "@/utils/cache";
import { Ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import DynamicIcon from "../../components/DynamicIcon.vue";
import { TTabRoute} from '@/store/modules/multipleTab'
let multipleTabsStore = useMultipleTabs();
const multipleCache = createCache(CACHE_PREFIX);
let router = useRouter();
const currentRoute = ref(router.currentRoute);
let configStore = useConfigStore();
let menuCollapse = inject<Ref<boolean>>("menuCollapse")!;
let updateMenuCollapse = inject<(value: boolean) => void>("updateMenuCollapse")!;
function onTabclick(evt: string | number) {
    if (typeof evt === "string") evt = Number.parseInt(evt);
    router.push(multipleTabsStore.tabs[evt].fullPath);
}

function onCloseRigthTabs(evt: string | number) {
    if (typeof evt === "string") evt = Number.parseInt(evt);
    multipleTabsStore.closeRigthTabs(evt);
}
function onCloseLeftTabs(evt: string | number) {
    if (typeof evt === "string") evt = Number.parseInt(evt);
    multipleTabsStore.closeLeftTabs(evt);
}
function onCloseOtherTabs(evt: string | number) {
    if (typeof evt === "string") evt = Number.parseInt(evt);
    multipleTabsStore.closeOtherTabs(evt);
}
function onCloseAllTabs(evt: string | number) {
    if (typeof evt === "string") evt = Number.parseInt(evt);
    multipleTabsStore.closeAllTabs(evt);
}
function onCloseTab(evt: string | number) {
    if (typeof evt === "string") evt = Number.parseInt(evt);
    multipleTabsStore.closeTab(evt);
}
function onSwitchResidentTab(evt: string | number) {
    if (typeof evt === "string") evt = Number.parseInt(evt);
    multipleTabsStore.switchResidentTab(evt);
}
let currentTabIndex = computed(() => {
    return multipleTabsStore.tabs.findIndex((item) => item.fullPath === currentRoute.value.fullPath);
});
// 关闭页面或者刷新页面时保存 tabs 到本地缓存
function updateTabs2LocalStorage() {
    multipleCache.removeCache(TABS_CACHE_NAME);
    multipleCache.removeCache(CACHE_TABS_CACHE_NAME)
    multipleCache.setCache(TABS_CACHE_NAME, JSON.stringify(multipleTabsStore.tabs));
    multipleCache.setCache(CACHE_TABS_CACHE_NAME, JSON.stringify(multipleTabsStore.cacheList));
}
// setup create 钩子
function onCreate() {
    window.addEventListener('beforeunload', updateTabs2LocalStorage)
}
onCreate();
onMounted(() => {
    // 初始化多标签页
    let multipleCacheValue: string | null = multipleCache.getCache(TABS_CACHE_NAME);
    let tabs = multipleCacheValue ? JSON.parse(multipleCacheValue) as Array<TTabRoute> : null;
    if (tabs instanceof Array && tabs.length) {
        const multipleStore = useMultipleTabs();
        multipleStore.initTab(tabs);
    }
})
onUnmounted(() => {
    window.removeEventListener('beforeunload', updateTabs2LocalStorage);
})
</script>

<style scoped lang="scss">
.container {
    flex: none;
    border-radius: var(--border-radius-small);
    right: 0;
    display: flex;
    width: 100%;
    height: 40px; // a-tabs的高度是40px
    align-items: center;
    height: 40px;
    position: absolute;
    top: 0;
    left: 0;
    padding-right: var(--size-3);
    box-sizing: border-box;
    background-color: var(--color-bg-opacity-2);
    backdrop-filter: blur(25px);
    user-select: none;
}

.tabs {
    flex: 1;
    min-width: 0;
}

.collapse_btn {
    box-sizing: border-box;
    flex: none;
    min-width: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 40px;
    color: var(--color-text-2);
    transition: background-color 0.2s;

    &:hover {
        cursor: pointer;
        background-color: var(--color-fill-1);
    }

    &:active {
        background-color: var(--color-fill-3);
    }
}

:deep(.arco-tabs-nav-type-line .arco-tabs-tab) {
    margin-left: var(--size-3);
    margin-right: var(--size-3);
}
</style>
