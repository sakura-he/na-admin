<template>
    <div class="tw-w-full tw-h-full tw-bg-cbg-1">
        <div class="tw-w-full tw-h-full" v-for="[routesMapKey, routesMapValue] in openedIframes" :key="routesMapKey"
            v-show="route.name === routesMapKey" v-loading="!routesMapValue.loaded">
            <iframe :src="(routesMapValue.meta.link as string)" frameborder="0" allow="fullscreen" allowfullscreen
                width="100%" height="100%" v-if="routesMapValue.loaded || route.name === routesMapKey"
                @load="onIframeLoad(routesMapValue)"></iframe>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute, RouteRecordNormalized, RouteMeta } from 'vue-router'
import { useMultipleTabs } from '@/store/index'
let multipleTabs = useMultipleTabs();
let route = useRoute();
type IIframeRoutesMapValue = {
    loaded: boolean;
    meta: RouteMeta
}
let allIframeRoutesMap = new Map()
let lastOpenedIframesMap: typeof allIframeRoutesMap = new Map();
// 获取多标签中打开的 iframe类型的route
let openedIframes = computed(() => {
    let openedIframesMap: typeof allIframeRoutesMap = new Map();
    multipleTabs.tabs.forEach((tab) => {
        if (tab.meta.link && tab.meta.iframe) {
            let oldIframe = lastOpenedIframesMap.get(tab.name as string);
            // 旧的合并,新的赋值初始值
            openedIframesMap.set(tab.name as string, oldIframe ?? reactive({ loaded: false, meta: tab.meta }))

        }
    })
    if (route.meta.link && route.meta.iframe) {
        let oldIframe = lastOpenedIframesMap.get(route.name as string);
        // 旧的合并,新的赋值初始值
        openedIframesMap.set(route.name as string, oldIframe ?? reactive({ loaded: false, meta: route.meta }))
    }
    // 备份
    lastOpenedIframesMap = openedIframesMap;
    return openedIframesMap
})
function onIframeLoad(routeValue: IIframeRoutesMapValue) {
    routeValue.loaded = true
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    background: var(--color-fill-1);
}
</style>
