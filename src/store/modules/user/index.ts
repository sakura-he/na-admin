import { ILoginData, login, getUserInfo } from "@/api/user";
import { router } from "@/router";
import { LOGIN } from "@/router/routes/constant";
import createCache, { removePrefix } from "@/utils/cache";
import { defineStore } from "pinia";
import { useNavigateStore } from "@/store/modules/navigate";
const STORE_ID = "user";
let cache = createCache(STORE_ID);
interface IUserStoreType {
    token: string;
    userInfo: Record<string, any>;
    permissions: string[];
}
export const useUserStore = defineStore(STORE_ID, {
    state(): IUserStoreType {
        return {
            token: (() => cache.getCache("token") || "")(),
            userInfo: {},
            permissions: [],
        };
    },
    actions: {
        async login(loginData: ILoginData) {
            try {
                const res = await login(loginData);
                let token: string = res.data;
                this.token = token;
                console.log('asdfasdfsadfs')
                await this.getUserInfo();
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async getUserInfo() {
            console.log('asdfasdf')
            try {
                const res = await getUserInfo(this.token);
                console.log('asdf',res)
                this.userInfo = res.data;
                this.permissions = res.data.permissions
                let navigateStore = useNavigateStore();
                // 请求异步路由数组
                await navigateStore.getAsyncMenu();
            } catch (error) {
                console.log(error)
                return Promise.reject(error);
            }
        },
        logout() {
            // 删除用户信息
            removePrefix(STORE_ID);
            router.replace({ name: LOGIN });
        },
    },
});

type useUserStoreType = typeof useUserStore;
// 监听state指定键值改变并持久化到本地存储
export function subscribeUserStore(store: ReturnType<useUserStoreType>) {
    console.log("开始监听");
    store.$subscribe(
        (mutation, state) => {
            console.log("监听到改变了");
            cache.setCache("token", state.token);
        },
        { detached: true }
    );
}
