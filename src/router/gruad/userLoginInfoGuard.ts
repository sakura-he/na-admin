import { Router } from "vue-router";
import { useUserStore } from "@/store";
import { useNavigateStore } from "@/store/modules/navigate";
import NProgress from "nprogress";
import { WHITE_LIST } from "@/router/routes/constant";
import { Message } from "@arco-design/web-vue";
// 用户登录验证
export default function setupUserLoginInfoGuard(router: Router) {
    router.beforeEach((to, from, next) => {
        NProgress.start();
        let userStore = useUserStore();
        let navigateStore = useNavigateStore();
        // 已登录用户
        if (userStore.token) {
            // 判断登录后加载过路由了吗
            if (navigateStore.asyncMenuList.length) {
                next(); // 添加过路由了,继续跳转
            } else {
                userStore.getUserInfo().then((res) => {
                    // 请求路由成功后重新跳转
                    next({ ...to, replace: true });
                });
            }
            return;
        }
        // 白名单路由直接跳转
        if (WHITE_LIST.findIndex((item) => item === to.name) >= 0) {
            next();
            return;
        }
        // 未登录用户 没有命中白名单跳转登录页
        Message.error({
            content: "请登陆后访问",
        });
        next({
            name: "login",
            query: { toUrl: to.fullPath },
            replace: true,
        });
    });
}
