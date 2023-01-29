<template>
    <div class="page ">
        <NaPageHeader :show-back="false" full>
            <template v-slot:title>
                角色权限管理
            </template>
            <template v-slot:subtitle>
                页面数据为 Mock 示例数据，非真实数据。
            </template>
        </NaPageHeader>
        <input type="text" v-model="text">
    </div>
</template>
<script setup lang="ts">
import NaPageHeader from '@/components/NaPageHeader.vue';
let text = ref('');
let bool = ref(false)
</script>
<style scoped lang="scss">
.page {
    min-height: 100%;
}
</style>