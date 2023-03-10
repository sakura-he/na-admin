import { getMenuList } from "@/api/user";
import { router, } from "@/router";
import { createAsyncRoutes, firstRoute, sortAsyncRoutes } from "@/router/routes";
import { NOT_FOUND_ROUTE } from "@/router/routes/base";
import { HOME } from "@/router/routes/constant";
import { recursiveTreeByLastLevel } from "@/utils/breadcrumb";
import createCache from "@/utils/cache";
import { defineStore } from "pinia";
import { RouteRecordRaw } from "vue-router";
const STORE_ID = "navigate";
import { addRoutes } from './helper'
interface INavigateState {
    asyncMenuList: any[]; // 后端返回的原始菜单数组
    flatRoutes: any[]; // 扁平化路由数组
    breadCrumb: any[]; // 面包屑数组
    currentRouter2MenuTreeLevel: number[];
    startPage: RouteRecordRaw | undefined;
}
let cache = createCache(STORE_ID);
export const useNavigateStore = defineStore(STORE_ID, {
    state: (): INavigateState => {
        return {
            asyncMenuList: [],
            flatRoutes: [],
            breadCrumb: [],
            currentRouter2MenuTreeLevel: [],
            startPage: undefined
        };
    },
    actions: {
        // 请求后台路由对象
        async getAsyncMenu() {
            try {
                const res = await getMenuList();
                let asyncMenuList = res.data;
                // 排序后处理
                asyncMenuList = sortAsyncRoutes(asyncMenuList);
                this.asyncMenuList.length = 0;
                this.asyncMenuList.push(...asyncMenuList);
                // 生成vue-router路由记录
                let routeRecords = createAsyncRoutes(this.asyncMenuList);

                console.log(routeRecords)
                // 返回第一个单页面,作为登录后的起始页
                this.startPage = firstRoute(routeRecords);
                if (this.startPage === undefined) {
                    throw new Error("没有找到有效的起始页");
                }
                // 更改/路径的路由为第一个有效页面(以前是login)
                routeRecords.unshift({
                    name: HOME,
                    path: "/",
                    redirect: {
                        name: this.startPage.name,
                    },
                });
                // 最后,添加404路由
                routeRecords.push(NOT_FOUND_ROUTE as any);
                // 把生成的路由记录加载到vue-router中
                routeRecords.forEach((routeRecord) => router.addRoute(routeRecord));
                // 更新store的routes,方便别的地方使用
                this.flatRoutes.length = 0;
                this.flatRoutes.push(...routeRecords);
                // 生成菜单和路由
            } catch (error) {
                console.log("@store/user/index/getAsyncMenu 获取异步菜单错误", error);
                return Promise.reject(error);
            }
        },
        updateBreadcrumb(name: string) {
            // 更新面包屑
            let matches = recursiveTreeByLastLevel(name, this.asyncMenuList, "name");
            this.breadCrumb = matches.rData;
            this.currentRouter2MenuTreeLevel = matches.floorArr;
        },
    },
});

type useNavigateStoreType = typeof useNavigateStore;
// 监听state指定键值改变并持久化到本地存储
export function subscribeNavigateStore(store: ReturnType<useNavigateStoreType>) {
    console.log("开始监听");
    store.$subscribe(
        (mutation, state) => {
            console.log("监听到改变了");
        },
        { detached: true }
    );
}
