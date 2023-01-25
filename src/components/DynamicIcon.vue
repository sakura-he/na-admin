<script lang="tsx">
import { h, resolveComponent, VNode } from "vue";
export default defineComponent({
    props: {
        icon: {
            type: String,
            required: false,
        },
        backupIcon: {
            type: String,
            required: false,
        },
    },
    setup(props) {
        let iconComp: ReturnType<typeof resolveComponent>;
        return () => {
            if (!(props.icon || props.backupIcon)) {
                return null;
            }
            if (props.icon) {
                iconComp = resolveComponent(props.icon);
                if (typeof iconComp !== "string") return h(iconComp);
            }
            if (props.backupIcon) {
                iconComp = resolveComponent(props.backupIcon);
                if (typeof iconComp !== "string") return h(iconComp);
                // 没找到图标组件和备用图标组件,返回空白页面图标
                else return h(resolveComponent("icon-file"));
            }
            return null;
        };
    },
});
</script>
