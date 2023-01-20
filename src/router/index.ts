import { DEFAULT_LAYOUT } from "@/layout/const";
import { createRouter, createWebHashHistory } from "vue-router";
import createRouterGuard from "./gruad";
import "./type.ts";
import { NOT_FOUND, LOGIN, HOME } from "./routes/constant";
import {IFRAME_ROUTE,LINK_ROUTE} from './routes/base'
let router = createRouter({
    history: createWebHashHistory(),
    // 预置的路由,包含登录页和404页
    routes: [
        {
            path: "/",
            name: HOME,
            redirect: "login",
        },
        {
            path: "/login",
            name: LOGIN,
            component: () => import("@/views/login/Login.vue"),
            meta: {
                requiresAuth: false,
                layout: DEFAULT_LAYOUT,
                noAffix: true,
            },
        },
    ],
});
createRouterGuard(router);
export { router };
