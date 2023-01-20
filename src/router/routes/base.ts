import { DEFAULT_LAYOUT } from "@/layout/const";
import { NOT_FOUND,IFRAME,LINK,HOME,LOGIN } from "./constant";
// 404路由
export const NOT_FOUND_ROUTE = {
    path: "/:pathMatch(.*)*",
    name: NOT_FOUND,
    meta: {
        layout: DEFAULT_LAYOUT,
        requiresAuth: false,
        noAffix: true,
    },
    component: () => import("@/views/not-found/index.vue"),
};
export const IFRAME_ROUTE = {
    path:"/iframe",
    name:IFRAME,
    meta:{
        requiresAuth:true,
        layout:DEFAULT_LAYOUT
    },
    component: () => import('@/layout/components/Iframe.vue'),
}
export const LINK_ROUTE = {
    path:"/link",
    name:LINK,
    meta:{
        requiresAuth:true,
        layout:DEFAULT_LAYOUT
    },
    component: () => import('@/layout/components/Link.vue'),
}