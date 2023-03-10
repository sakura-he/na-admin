import { router } from "@/router";
import { WHITE_LIST } from "@/router/routes/constant";
import createCache from "@/utils/cache";
import { defineStore } from "pinia";
import { RouteLocationNormalized } from "vue-router";
const STORE_ID = "mutiple_tab";
type TTabRoute = Omit<RouteLocationNormalized, "matched" | "redirectedFrom">;
interface IMultipleTabState {
    tabs: TTabRoute[];
    cacheList: Set<string>;
}
let cache = createCache(STORE_ID);
export const useMultipleTabs = defineStore(STORE_ID, {
    state: (): IMultipleTabState => {
        return {
            tabs: [],
            cacheList: new Set(),
        };
    },
    actions: {
        // 添加新的标签页
        addTab(route: TTabRoute) {
            if (!this.canAddRoute(route)) {
                return;
            }
            this.tabs.push(route);
            this.updateCacheList();

        },
        // 是否允许添加新的路由对象到数组中
        canAddRoute(route: TTabRoute): boolean {
            let hasTab = this.tabs.findIndex((tab) => tab.fullPath === route.fullPath) >= 0;
            let noAffix = route.meta?.noAffix;
            return !(hasTab || noAffix);
        },
        // 根据当前打开的标签页更新缓存的页面组件
        updateCacheList() {
            let newCacheList: typeof this.cacheList = new Set();
            this.tabs.forEach((tab) => {
                if (this.canCacheTab(tab)) {
                    newCacheList.add(tab.name as string);
                }
            });
            this.cacheList = newCacheList;
        },

        // 判断是否缓存标签页
        canCacheTab(route: TTabRoute): boolean {
            if (!route.name || typeof route.name == "symbol" || route?.meta?.ignoreCache || WHITE_LIST.includes(route.name!)) {
                return false;
            }
            return true;
        },
        // 关闭标签页
        closeTab(index: number) {
            // 判断当前关闭的标签页时不是正在浏览的标签页
            let currentRoute = router.currentRoute.value;
            if (this.tabs[index].fullPath === currentRoute.fullPath) {
                // 关闭的时正在浏览的标签页
                this.closeCurrentTab(index);
            } else {
                this.tabs.splice(index, 1);
            }
            // 在keep-alive的缓存数组中同时一并删除(currentRouter是.value不存在)
            this.updateCacheList();
        },
        // 关闭当前标签页
        closeCurrentTab(index: number) {
            if (index === this.tabs.length - 1) {
                // 当前打开的页面为最右侧的标签页,关闭后激活剩余标签页的最后一个标签
                this.tabs.pop();
                this.tabs.length && router.replace(this.tabs[this.tabs.length - 1].fullPath);
            } else {
                // 不是最后的标签,关闭后激活右侧的标签
                this.tabs.splice(index, 1);
                router.replace(this.tabs[index].fullPath);

            }
        },
        // 关闭指定标签页的右侧标签页
        closeRigthTabs(tabIndex: number) {
            let currentRoute = router.currentRoute.value;
            let newTabs: TTabRoute[];
            newTabs = this.tabs.filter((item, index) => {
                // 判断索引是否在左侧
                let isSaveIndex = index <= tabIndex;
                // 判断是否常驻tab(固定的)
                let isResidentTab = item?.meta?.residentTab;
                return isSaveIndex || isResidentTab;
            });
            this.tabs = newTabs;
            this.updateCacheList();
            // 判断当前打开的标签页有没有关闭,没有关闭就不跳转路由,关闭了,跳转到tabIndex页面
            let hasCurrentRoute = newTabs.findIndex((tab) => tab.fullPath === currentRoute.fullPath) > 0 ? true : false;
            if (!hasCurrentRoute) {
                router.replace(this.tabs[tabIndex].fullPath);
            }
        },
        // 关闭左侧标签页
        closeLeftTabs(tabIndex: number) {
            let currentRoute = router.currentRoute.value;
            let newTabs: TTabRoute[];
            newTabs = this.tabs.filter((item, index) => {
                let isSaveIndex = index >= tabIndex;
                let isResidentTab = item?.meta?.residentTab;
                return isSaveIndex || isResidentTab;
            });
            this.tabs = newTabs;
            this.updateCacheList();
            // 判断当前打开的标签页有没有关闭,没有关闭就不跳转路由,关闭了,跳转到tabIndex页面
            let hasCurrentRoute = newTabs.findIndex((tab) => tab.fullPath === currentRoute.fullPath) > 0 ? true : false;
            if (!hasCurrentRoute) {
                router.replace(this.tabs[tabIndex].fullPath);
            }
        },
        // 关闭所有标签页
        closeAllTabs(tabIndex: number) {
            let currentRoute = router.currentRoute.value;
            let newTabs: TTabRoute[];
            newTabs = this.tabs.filter((item, index) => {
                let isResidentTab = item?.meta?.residentTab;
                return isResidentTab;
            });
            this.tabs = newTabs;
            this.updateCacheList();
            // 判断当前打开的标签页有没有关闭,没有关闭就不跳转路由,关闭了,跳转到tabIndex页面
            let hasCurrentRoute = newTabs.findIndex((tab) => tab.fullPath === currentRoute.fullPath) > 0 ? true : false;
            if (!hasCurrentRoute) {
                router.replace(this.tabs[tabIndex].fullPath);
            }
        },
        // 关闭其他标签页
        closeOtherTabs(tabIndex: number) {
            let currentRoute = router.currentRoute.value;
            let newTabs: TTabRoute[];
            newTabs = this.tabs.filter((item, index) => {
                let isSaveIndex = index == tabIndex;
                let isResidentTab = item?.meta?.residentTab;
                return isSaveIndex || isResidentTab;
            });
            this.tabs = newTabs;
            this.updateCacheList();
            // 判断当前打开的标签页有没有关闭,没有关闭就不跳转路由,关闭了,跳转到tabIndex页面
            let hasCurrentRoute = newTabs.findIndex((tab) => tab.fullPath === currentRoute.fullPath) > 0 ? true : false;
            if (!hasCurrentRoute) {
                router.replace(this.tabs[tabIndex].fullPath);
            }
        },
        // 切换固定状态
        switchResidentTab(index: number) {
            this.tabs[index].meta = this.tabs[index].meta || {};
            if (!this.tabs[index].meta.noCancelResident) {
                this.tabs[index].meta.residentTab = !this.tabs[index].meta.residentTab;
            }
        },
    },
});

type useUserStoreType = typeof useMultipleTabs;
// 监听state指定键值改变并持久化到本地存储
export function subscribeMultipleTabsStore(store: ReturnType<useUserStoreType>) {
    console.log("开始监听");
    store.$subscribe(
        (mutation, state) => {
            if (!state.tabs.length) {
                router.push('/')
            }
        },
        { detached: true }
    );
}
