<template>
    <Transition v-bind="transition" :mode="_mode"
        :style="{ '--transition-time': `${props.transitionTime.toString()}s` }">
        <slot></slot>
    </Transition>

</template>


<script setup lang="ts">

let props = defineProps({
    inName: {
        type: String,
        default: 'fadeIn'
    },
    outName: {
        type: String,
        default: 'fadeOut'
    },
    absolute: {
        type: Boolean,
        default: false
    },
    mode: {
        type: String,
        default: 'default'
    },
    transitionTime: {
        type: Number,
        default: .3
    }
})
let _mode = computed<'default' | 'in-out' | 'out-in'>(() => {
    if (props.absolute) {
        return 'default'
    } else {
        return props.mode as 'default' | 'in-out' | 'out-in'
    }
})
let time = computed(() => {

})
let transition = computed(() => ({
    "enter-from-class": `${props.inName}-enter-from ${props.absolute ? 'transition-mode-absolute' : ''}`,
    "enter-active-class": `${props.inName}-enter-active ${props.absolute ? 'transition-mode-absolute' : ''}`,
    "enter-to-class": `${props.inName}-enter-to ${props.absolute ? 'transition-mode-absolute' : ''}`,
    "leave-from-class": `${props.outName}-leave-from ${props.absolute ? 'transition-mode-absolute' : ''}`,
    "leave-active-class": `${props.outName}-leave-active ${props.absolute ? 'transition-mode-absolute' : ''}`,
    "leave-to-class": `${props.outName}-leave-to ${props.absolute ? 'transition-mode-absolute' : ''}`,
}))
</script>

<style scoped>

</style>
