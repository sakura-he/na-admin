<template>
    <div class="page" v-loading="isLoading">
        <iframe :src="(meta.link as string)" frameborder="0" allow="fullscreen" allowfullscreen width="100%" height="100%" ref="iframeRef"></iframe> 
    </div>

</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
let router = useRouter();
let route = useRoute();

let meta = route.meta;
let isLoading = ref(true);
let iframeRef = ref<HTMLIFrameElement|null>(null);
onMounted(()=>{
    iframeRef.value?.addEventListener('load',()=>{
        isLoading.value = false;
    }) 
})
</script>

<style scoped>
.page{
    width:100%;
    height:100%;
    background:var(--color-fill-1);
}    
</style>
