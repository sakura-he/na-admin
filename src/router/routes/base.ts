import { DEFAULT_LAYOUT } from "@/layout/const";
import { RouteRecordRaw } from "vue-router";
import { NOT_FOUND, LINK, HOME, LOGIN } from "./constant";
// 404路由
export const NOT_FOUND_ROUTE: RouteRecordRaw = {
    path: "/:pathMatch(.*)*",
    name: NOT_FOUND,
    meta: {
        layout: DEFAULT_LAYOUT,
        requiresAuth: false,
        noAffix: true,
    },
    component: () => import("@/views/not-found/index.vue"),

};
export const LINK_ROUTE: RouteRecordRaw = {
    path: "/link",
    name: LINK,
    meta: {
        requiresAuth: true,
        layout: DEFAULT_LAYOUT,
        noAffix:true,
    },
    component: () => import('@/layout/components/Link.vue'),
}
export const HOME_ROUTE: RouteRecordRaw = {
    path: "/",
    name: HOME,
    component: () => import("@/views/home/Home.vue"),
    meta: {
        requiresAuth: false,
        layout: DEFAULT_LAYOUT,
        noAffix:true,
    },
}
export const LOGIN_ROUTE: RouteRecordRaw = {
    path: "/login",
    name: LOGIN,
    component: () => import("@/views/login/Login.vue"),
    meta: {
        requiresAuth: false,
        layout: DEFAULT_LAYOUT,
        noAffix: true,
    },
}