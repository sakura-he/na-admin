<template>
    <div class="container">
        <a-tabs type="line" :hide-content="true" :editable="true" :justify="true" :active-key="currentTabIndex"
            @tab-click="onTabclick" @delete="onCloseTab" class="tabs">
            <a-tab-pane :key="tabIndex" v-for="(tab, tabIndex) in multipleTabs.tabs"
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
                                        {{ tab?.meta?.residentTab? "取消常驻标签页": "常驻标签页" }}
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
import { useMultipleTabs } from "@/store/modules/mutipleTab/index";
import DynamicIcon from "./DynamicIcon.vue";
import { useRouter } from "vue-router";
import { Ref } from "vue";
import { useConfigStore } from "@/store";
let multipleTabs = useMultipleTabs();
let router = useRouter();
const currentRoute = ref(router.currentRoute);
let configStore = useConfigStore();
let menuCollapse = inject<Ref<boolean>>("menuCollapse")!;
let updateMenuCollapse = inject<(value: boolean) => void>("updateMenuCollapse")!;
function onTabclick(evt: string | number) {
    if (typeof evt === "string") evt = Number.parseInt(evt);
    router.push(multipleTabs.tabs[evt].fullPath);
}

function onCloseRigthTabs(evt: string | number) {
    if (typeof evt === "string") evt = Number.parseInt(evt);
    multipleTabs.closeRigthTabs(evt);
}
function onCloseLeftTabs(evt: string | number) {
    if (typeof evt === "string") evt = Number.parseInt(evt);
    multipleTabs.closeLeftTabs(evt);
}
function onCloseOtherTabs(evt: string | number) {
    if (typeof evt === "string") evt = Number.parseInt(evt);
    multipleTabs.closeOtherTabs(evt);
}
function onCloseAllTabs(evt: string | number) {
    if (typeof evt === "string") evt = Number.parseInt(evt);
    multipleTabs.closeAllTabs(evt);
}
function onCloseTab(evt: string | number) {
    if (typeof evt === "string") evt = Number.parseInt(evt);
    multipleTabs.closeTab(evt);
}
function onSwitchResidentTab(evt: string | number) {
    if (typeof evt === "string") evt = Number.parseInt(evt);
    multipleTabs.switchResidentTab(evt);
}
let currentTabIndex = computed(() => {
    return multipleTabs.tabs.findIndex((item) => item.fullPath === currentRoute.value.fullPath);
});
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
    padding-right: var(--size-4);
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
    margin-left: var(--size-4);
    margin-right: var(--size-4);
}
</style>
