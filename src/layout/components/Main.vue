<!-- 匹配到的路由页面将会被在这组件中渲染 -->
<template>
    <div class="container  tw-flex-row  tw-transition-all">
        <router-view v-slot="{ Component, route }" v-if="showRouter">
            <keep-alive :include="cacheList">
            
                    <component :is="Component" :key="route.fullPath" />
           
            </keep-alive>
        </router-view>
    </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { useMultipleTabs } from "@/store/modules/mutipleTab";
import { useConfigStore } from "@/store";
import PageTransition from '@/layout/components/PageTransiton.vue'
enum RouterTransitionsEnum { }
let configStore = useConfigStore();
let multipleTabs = useMultipleTabs();
let cacheList = computed(() => {
    return multipleTabs.cacheList;
});
let showRouter = inject("showRouter")!;
</script>

<style scoped lang="scss">
.container {
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
