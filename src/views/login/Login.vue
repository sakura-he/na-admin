<template>
    <div class="container">
        <!-- <div class="logo">11</div> -->
        <div class="banner">
            <a-carousel
                class="swiper"
                :default-current="2"
                @change="handleChange"
                indicator-type="slider"
                :auto-play="true"
                :show-arrow="'never'"
            >
                <a-carousel-item
                    v-for="image in images"
                    class="swiper__item"
                >
                    <img
                        :src="image"
                        :style="{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }"
                    />
                </a-carousel-item>
            </a-carousel>
        </div>
        <div class="content">
            <div class="form tw-w-11/12 tw-pointer-events-auto tw-mx-auto sm:tw-max-w-[340px] tw-py-10 tw-px-6 tw-box-border tw-bg-fill-transparent-2 tw-rounded tw-backdrop-blur-[20px] md:tw-mr-[10%]">
                <div class="tw-mb-4">
                    <div class="login__title tw-text-c-1 tw-text-title-3 tw-leading-snug tw-select-none tw-pb-2">Nest Arco Admain</div>
                    <div class="login__sub-title tw-text-c-2 tw-text-body-3 tw-leading-tight tw-select-none tw-pb-2">欢迎使用</div>
                    <div class="login__err-msg"></div>
                </div>

                <a-tabs
                    default-active-key="2"
                    size="mini"
                    :header-padding="false"
                    v-if="false"
                >
                    <a-tab-pane
                        key="1"
                        title="用户名登录"
                    ></a-tab-pane>
                    <a-tab-pane
                        key="2"
                        title="手机验证登录"
                    ></a-tab-pane>
                    <a-tab-pane
                        key="3"
                        title="微信登录"
                    ></a-tab-pane>
                </a-tabs>
                <!-- 登录表单 -->
                <a-form
                    layout="vertical"
                    :model="form"
                    class="login__form"
                >
                    <a-form-item field="11">
                        <a-input
                            v-model="form.username"
                            placeholder="用户名"
                            id="username"
                        >
                            <template #prefix>
                                <icon-user />
                            </template>
                        </a-input>
                    </a-form-item>
                    <a-form-item field="post">
                        <a-input-password
                            v-model="form.userpw"
                            placeholder="密码"
                        >
                            <template #prefix>
                                <icon-lock />
                            </template>
                        </a-input-password>
                    </a-form-item>

                    <a-form-item field="isRemenber">
                        <a-checkbox v-model="form.isRemenber">记住密码</a-checkbox>
                        <a-button
                            html-type="submit"
                            class="tw-ml-auto"
                            type="text"
                            size="mini"
                        >
                            忘记密码
                        </a-button>
                    </a-form-item>
                    <a-form-item>
                        <a-button
                            html-type="submit"
                            long
                            type="primary"
                            @click="onLogin"
                            :loading="loading"
                        >
                            登录
                        </a-button>
                    </a-form-item>
                </a-form>
                <div>
                    <a-space
                        class="tw-text-[20px] tw-text-c-2"
                        size="medium"
                    >
                        <span class="tw-text-body-3 tw-text-c-1">其他登录方式:</span>
                        <icon-mobile class="hover:tw-text-p-6 hover:tw-cursor-pointer" />
                        <icon-wechat class="hover:tw-text-p-6 hover:tw-cursor-pointer" />
                        <icon-github class="hover:tw-text-p-6 hover:tw-cursor-pointer" />
                        <icon-google-circle-fill class="hover:tw-text-p-6 hover:tw-cursor-pointer" />
                        <icon-twitter-circle-fill class="hover:tw-text-p-6 hover:tw-cursor-pointer" />
                    </a-space>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import login1 from "@/assets/login1.jpg";
import login2 from "@/assets/login2.jpg";
import login3 from "@/assets/login3.jpg";
import { HOME } from "@/router/routes/constant";
import { useUserStore } from "@/store";
import useLoading from "@/utils/useLoading";
import { Message } from "@arco-design/web-vue";
import { useRoute, useRouter } from "vue-router";

let userStore = useUserStore();
let router = useRouter();
let route = useRoute();
let { loading, setLoading } = useLoading(false);

const images = [login1, login2, login3];
const handleChange = (value: number) => {};
let form = reactive({
    username: "",
    userpw: "",
    agree: false,
    isRemenber: false,
});

function onLogin() {
    // 防止重复点击登录
    if (loading.value) return;
    setLoading(true);
    userStore
        .login({
            username: form.username,
            password: form.userpw,
        })
        .then(() => {
            if (route.query.toUrl) {
                Message.success("登录成功!正在跳转登录前的页面");
                router.replace({
                    path: <string>route.query.toUrl,
                });
            } else {
                Message.success("欢迎使用");
                router.replace({
                    name: HOME,
                    replace: true,
                });
            }
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        });
}
</script>
<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
}

.banner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: #f3f5f8;
}

.content {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
}

.swiper {
    height: 100%;

    .siwper__item {
        height: 100%;
    }
}
</style>
