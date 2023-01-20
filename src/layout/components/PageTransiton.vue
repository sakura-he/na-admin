<template>
    <Transition v-bind="transitions" :mode="_mode" type="animation">
        <slot></slot>
    </Transition>
</template>

<script setup lang="ts">
import kebabCase from 'lodash/kebabCase';
import {TransitionProps} from 'vue'
let props = defineProps({
    inName: {
        type: String,
        default: 'fadeIn'
    },
    outName: {
        type: String,
        default: 'fadeOut'
    },
    absolute:{
        type:Boolean,
        default:false
    },
    mode:{
        type:String,
        default:'default'
    }
})
interface TransitionDataType  {
        className:string;
        style:HTMLStyleElement
    }
interface ElementTransitifyType extends HTMLElement {
    transitionData:TransitionDataType
}
let _mode = computed<'default'|'in-out'|'out-in'>(()=>{
    if(props.absolute){
        return 'default'
    }else{
        return props.mode as 'default'|'in-out'|'out-in'
    }
})
let transitions:TransitionProps = reactive({
    // 在元素被插入到 DOM 之前被调用
    // 用这个来设置元素的 "enter-from" 状态
    onBeforeEnter(el) { },

    // 在元素被插入到 DOM 之后的下一帧被调用
    // 用这个来开始进入动画
    onEnter(_el) {
        let el:ElementTransitifyType = _el as ElementTransitifyType;
        let animationName = props.inName;
        let style = document.createElement('style');
        let classRule: Record<string, string> = {
            'animation': `${animationName} .3s`,
        }
        if(props.absolute){
            classRule.position = 'absolute';
            classRule.zIndex = '10';
        }
        let classRuleStr = Object.keys(classRule).map(rule => `${rule}:${classRule[rule]}`).join(';');
        if (Object.keys(classRule).length === 1)
            classRuleStr = classRuleStr + ';';
        let className = kebabCase(animationName) + '-enter-active';
        let styleRuleStr = `.${className} {${classRuleStr}}`
        style.innerText = styleRuleStr;
        document.head.appendChild(style);
        el.classList.add(className);
        el.transitionData = {} as TransitionDataType
        el.transitionData.className = className;
        el.transitionData.style = style;
    },

    // 当进入过渡完成时调用。
    onAfterEnter(_el) {
        let el:ElementTransitifyType = _el as ElementTransitifyType
        if (typeof el.transitionData === 'object') {
            el.classList.remove(el.transitionData.className);
            document.head.removeChild(el.transitionData.style);
        }
    },
    onEnterCancelled(el) { },

    // 在 leave 钩子之前调用
    // 大多数时候，你应该只会用到 leave 钩子
    onBeforeLeave(el) { },

    // 在离开过渡开始时调用
    // 用这个来开始离开动画
    onLeave(_el) {
        let el:ElementTransitifyType = _el as ElementTransitifyType;
        let animationName = props.outName;
        let style = document.createElement('style');
        let classRule: Record<string, string> = {
            'animation': `${animationName} .3s`,
        }
        if(props.absolute){
            classRule.position = 'absolute'
            classRule.zIndex = '1';
        }
        let classRuleStr = Object.keys(classRule).map(rule => `${rule}:${classRule[rule]}`).join(';');
        if (Object.keys(classRule).length === 1)
            classRuleStr = classRuleStr + ';';
        let className = kebabCase(animationName) + '-leave-active';
        let styleRuleStr = `.${className} {${classRuleStr}}`
        style.innerText = styleRuleStr;
        document.head.appendChild(style);
        el.classList.add(className);
        el.transitionData = {} as TransitionDataType
        el.transitionData.className = className;
        el.transitionData.style = style;
        // 调用回调函数 done 表示过渡结束
        // 如果与 CSS 结合使用，则这个回调是可选参数

    },

    // 在离开过渡完成、
    // 且元素已从 DOM 中移除时调用
    onAfterLeave(_el) {
        let el:ElementTransitifyType = _el as ElementTransitifyType;
        if (typeof el.transitionData === 'object') {
            el.classList.remove(el.transitionData.className);
            document.head.removeChild(el.transitionData.style);
        }
    },

    // 仅在 v-show 过渡中可用
    onLeaveCancelled(el) { }
})
</script>

<style scoped>

</style>
