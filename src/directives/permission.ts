/**
 * 权限验证指令
 * 使用方式 <div :v-perms="['system.menus.add','system.menus.remove']"> 表示用户需要拥有'system.menus.add','system.menus.remove'
 * 这两种权限中的任意一种才可以渲染div
 */
import { Directive, App } from "vue";
import { hasPersission } from "@/utils/permission";
// 权限验证指令
export const DIRECTIVE_NAME = "perms";
export let directive: Directive = {
    // 在绑定元素的父组件
    // 及他自己的所有子节点都挂载完成后调用
    mounted(el: HTMLElement, binding, vnode, prevVnode) {
        let parentEL = el.parentNode;
        let validate = hasPersission(binding.value);
        if (!validate) {
            parentEL && parentEL?.removeChild(el);
        }
    },
    // 绑定元素的父组件更新前调用
    beforeUpdate(el, binding, vnode, prevVnode) {},
    // 在绑定元素的父组件
    // 及他自己的所有子节点都更新后调用
    updated(el, binding, vnode, prevVnode) {},
    // 绑定元素的父组件卸载前调用
    beforeUnmount(el, binding, vnode, prevVnode) {
        let parentEL = el.parentNode;
        let validate = hasPersission(binding.value);
        if (!validate) {
            parentEL && parentEL?.removeChild(el);
        }
    },
    // 绑定元素的父组件卸载后调用
    unmounted(el, binding, vnode, prevVnode) {},
};
export default function installPermissionDirective(app: App) {
    app.directive(DIRECTIVE_NAME, directive);
}
