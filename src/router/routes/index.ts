import { RouteRecordRaw, RouterView } from "vue-router";
import { MenuEnum } from "../type";
import { hasPermission } from '@/utils/permission'
import LinkComponent from '@/layout/components/Link.vue'
import NotMatchComponent from '@/views/exception/not-match-component/NotMatchComponent.vue' 
// 匹配views里面所有的.vue文件，动态引入
const modules = import.meta.glob("/src/views/**/*.vue");
// modules应该是一下结构的对象
// /src/views/login/index.vue: () => import("/src/views/login/index.vue"),
// /src/views/login/Login.vue: () => import("/src/views/login/Login.vue"),
// /src/views/setting/setting.vue: () => import("/src/views/setting/setting.vue"),
export function getModulesKey() {
    return Object.keys(modules).map((item) => item.replace("/src/views/", "").replace(".vue", ""));
}
/**
 * 整理路由配置对象(排序和鉴权)
 */
export function sortAsyncRoutes<AsyncRoutes extends Array<any>>(asyncRoutes: AsyncRoutes): AsyncRoutes {
    // 排序路由项
    asyncRoutes.sort((a, b) => {
        return (a?.meta?.order || 0) - (b?.meta?.order || 0)
    });
    // 过滤路由项
    asyncRoutes = asyncRoutes.filter(route => {
        // 在菜单中排除没有权限的路由
        if (!hasPermission(route.meta.roles || [])) {
            return false
        }
        if (route.children && route.children.length) {
            route.children = sortAsyncRoutes(route.children);
        }
        return true
    }) as AsyncRoutes
    return asyncRoutes
}
/**
 * 根据路由配置对象生成扁平化的路由记录并返回
 * @param asyncRoutes object 路由配置对象
 * @param parentPath string 父路由地址片段
 * @returns RouteRecordRaw[]
 */
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
    routeRecordRaw.meta!.componentPath = asyncRoute.component; 
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
        routeRecordRaw.component = loadComponent4String(asyncRoute.component);
    }
    return routeRecordRaw;
}
// 根据后端的路由配置components字段值,动态加载import.meta.glob中的动态组件
export function loadComponent4String(component: string) {
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
        return NotMatchComponent;
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
