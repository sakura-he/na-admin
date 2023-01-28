<template>
    <div class="tw-w-full tw-h-full tw-bg-cf-1">
        <div class="tw-fixed tw-z-40 tw-top-5 tw-left-5">
            <!-- 颜色模式切换 -->
            <ColorModeSwitch v-slot="icon" ref="ColorModeSwitchRef">
                <a-button shape="circle">
                    <DynamicIcon :icon="icon.icon" class="tw-text-title-1" />
                </a-button>
            </ColorModeSwitch>
        </div>
        <div class="tw-w-[100vw] tw-h-[100vh] tw-flex tw-flex-col tw-justify-center	setup">
            <section class="tw-center tw-w-1/2 tw-mx-auto tw-mb-5">
                <h1 class="tw-text-[80px] title ">NA-Admin</h1>
            </section>
            <section>
                <div class="tw-m-auto tw-w-max">
                    <a-space>
                        <a-button @click="onbutn">
                            <template #icon>
                                <icon-github />
                            </template>
                            <template #default>Github</template>
                        </a-button>
                        <a-button @click="onbutn">
                            <template #icon>
                                <icon-align-left />
                            </template>
                            <template #default>项目文档</template>
                        </a-button>
                        <a-button @click="onbutn" type="primary">
                            <template #default>开始体验<icon-right class="tw-pl-2" /></template>
                        </a-button>
                    </a-space>
                </div>

            </section>
        </div>



    </div>

</template>
<script lang="ts" setup>
import ColorModeSwitch from '@/layout/components/ColorModeSwitch.vue'
import { useRouter } from 'vue-router'
let router = useRouter();
function onbutn() {
    router.push('/login')
}

</script>
<style scoped >
.setup {}

.title {
    background-image: linear-gradient(to right, rgb(7, 107, 236), #39c5bb);
    background-clip: text;
    color: transparent;
    text-align: center;
}
</style>