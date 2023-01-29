<script  lang="tsx">
export default defineComponent({
    inheritAttrs: false,
    props: {
        full: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { attrs, slots }) {
        return () => (
            <div class={`na-page-header tw-bg-cbg-2 ${props.full ? 'full' : ''}`} >
                <a-page-header {...attrs}>{{ ...slots }}</a-page-header>
            </div>
        )
    }
})

</script>
<style scoped lang="scss">
.na-page-header.full {
    margin-left: calc(var(--page-pd-x) * -1);
    margin-right: calc(var(--page-pd-x) * -1);
    margin-top: calc(var(--page-pd-y) * -1);
}
</style>