<!-- 匹配到的路由页面将会被在这组件中渲染 -->
<template>
    <div class="main  tw-flex-row  tw-transition-all">
        <router-view v-slot="{ Component, route }" v-if="showRouter">
            <PageTransition mode="out-in" :in-name="configStore.openingAnimation" :out-name="configStore.quitAnimation">
                <keep-alive :include="cacheList">
                    <component :is="Component" :key="route.fullPath" v-show="!isIframe" />
                </keep-alive>
            </PageTransition>
        </router-view>
        <Iframe v-show="isIframe"></Iframe>
    </div>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import { useMultipleTabs } from "@/store/modules/mutipleTab";
import { useConfigStore } from "@/store";
import PageTransition from '@/layout/components/PageTransition.vue';
import Iframe from '@/layout/components/Iframe.vue'
let currentRoute = useRoute();
// 判断当前路由组件是不是iframe,如果是,则不在router-view中渲染,而是通过Iframe组件进行渲染
let isIframe = computed(() => (currentRoute.meta?.link && currentRoute.meta?.iframe))
let configStore = useConfigStore();
let multipleTabs = useMultipleTabs();
let cacheList = computed(() => {
    return Array.from(multipleTabs.cacheList);
});
let showRouter = inject("showRouter")!;  // 控制刷新

</script>

<style scoped lang="scss">
.main {
    margin: 0 auto;
    flex: 1 0 auto;
    width: 100%;
    padding-left: var(--page-pd-x);
    padding-right: var(--page-pd-x);
    padding-top: var(--page-pd-y);
    padding-bottom: var(--page-pd-y);
    box-sizing: border-box;
    border-radius: var(--border-radius-small);
    background-clip: content-box;
}
</style>
