import { RouteRecordRaw, RouterView } from "vue-router";
import { MenuEnum } from "../type";
import IframeComponent from '@/layout/components/Iframe.vue'
import LinkComponent from '@/layout/components/Link.vue'
// 匹配views里面所有的.vue文件，动态引入
const modules = import.meta.glob("/src/views/**/*.vue");
// modules应该是一下结构的对象
// /src/views/login/index.vue: () => import("/src/views/login/index.vue"),
// /src/views/login/Login.vue: () => import("/src/views/login/Login.vue"),
// /src/views/setting/setting.vue: () => import("/src/views/setting/setting.vue"),
export function getModulesKey() {
    return Object.keys(modules).map((item) => item.replace("/src/views/", "").replace(".vue", ""));
}
export function createAsyncRoutes(asyncRoutes: Array<any>, parentPath: string = "/"): RouteRecordRaw[] {
    let routeRecords: any[] = [];
    // 如果是单页,就返回单页,是目录,返回目录所有单页
    asyncRoutes.forEach((route) => {
        if (route.meta.type === MenuEnum["Catelog"]) {
            routeRecords.push(...createAsyncRoutes(route.children, parentPath + route.path + "/"));
        } else {
            routeRecords.push(coverRoute(route, parentPath));
        }
    });

    return routeRecords;
}

// 将后台返回的路由数据中的一项转换成vueRouter支持的路由记录对象
function coverRoute(asyncRoute: any, parentPath: string): RouteRecordRaw {
    let routeRecordRaw: RouteRecordRaw = {
        path: parentPath + asyncRoute.path,
        name: asyncRoute.name || Symbol(asyncRoute.path), // symbol,唯一
        meta: asyncRoute.meta || {},
        component: <any>null,
    };
    // 如果当前路由配置对象是一个目录,则组件为viewrouter
    if (asyncRoute.meta.type === MenuEnum["Catelog"] && asyncRoute.children && asyncRoute.children.length) {
        routeRecordRaw.component = RouterView;
    } else if (routeRecordRaw.meta?.link && routeRecordRaw.meta?.iframe) {
        // 内嵌iframe 不返回任何组件
    } else if (routeRecordRaw.meta?.link) {
        // 外部打开
        routeRecordRaw.component = LinkComponent
    } else {
        // 不是目录,去views目录中寻找对应的vue页面
        routeRecordRaw.component = loadRouteView(asyncRoute.component);
    }
    return routeRecordRaw;
}
// 根据后端的路由配置components字段值,动态加载import.meta.glob中的动态组件
export function loadRouteView(component: string) {
    try {
        // 在import.meta.glob生成的vue页面对象中,寻找出对应属性名包含传入的component名字符串的属性
        const findComponentPath = Object.keys(modules).find((key) => {
            return key.includes(`${component}.vue`);
        });
        if (findComponentPath) {
            return modules[findComponentPath];
        }
        throw Error(`找不到组件${component}，请确保组件路径正确`);
    } catch (error) {
        console.error(error);
        return RouterView;
    }
}
// 寻找vue router的路由记录对象中第一个页面,作为登陆后跳转的首页
export function firstRoute(routes: RouteRecordRaw[]): RouteRecordRaw | undefined {
    for (const route of routes) {
        // 判断当前路由记录是不是个目录,是的话,尝试在路由记录的chlidren记录中寻找
        if (route.meta?.type === MenuEnum["Catelog"] && route.children) {
            let children = firstRoute(route.children);
            if (children) {
                return children;
            }
        }
        // 如果遍历中遇到meta.type=Page类型的路由记录,说明是个单页,终止遍历并返回,
        if (route.meta?.type === MenuEnum["Page"]) {
            return route;
        }
    }
}
