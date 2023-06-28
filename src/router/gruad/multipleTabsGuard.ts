import { useMultipleTabs, useNavigateStore } from "@/store";
import createCache from '@/utils/cache';
import NProgress from "nprogress";
import { Router } from "vue-router";

const MUTIPLE_CACHE = 'multiple_tab'
const mutipleCache = createCache(MUTIPLE_CACHE);
export default function setupMultipleTabsGuard(router: Router) {
    router.beforeResolve((to, from) => {
        let routes = router.getRoutes();
        let multipleStore = useMultipleTabs();
        let navigateStore = useNavigateStore();
        let { matched, redirectedFrom, ...opt } = to;
        multipleStore.addTab(opt);
        navigateStore.updateBreadcrumb(to.name as string);

        NProgress.done();
    });
}
