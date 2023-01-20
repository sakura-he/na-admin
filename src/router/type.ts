import "vue-router";
export enum MenuEnum {
    Catelog = 1, // 目录
    Page, // 页面
    Button, // 按钮
}
// 定义路由的元数据
declare module "vue-router" {
    interface RouteMeta {
        // 名称,展示在菜单和tab上
        title?: string;
        // 当前路由使用的布局,一般在定义路由中使用
        layout?: string;
        type?: MenuEnum;
        // 权限数组
        roles?: string[]; // 使用前端鉴权模式下有效
        // 进入是否需要验证权限
        requiresAuth: boolean; // Whether login is required to access the current page (every route must declare)
        icon?: string; // 图标,也是菜单图标
        hideInMenu?: boolean; // 在侧边菜单中中隐藏, 但是可以通过链接打开
        hideChildrenInMenu?: boolean; // if set true, the children are not displayed in the side menu
        order?: number; // Sort routing menu items. If set key, the higher the value, the more forward it is
        noAffix?: boolean; // 如果为 true 则打开后不在 tab 中显示
        residentTab?: boolean; // 是否默认常驻 tabs 中
        noCancelResident?: boolean; // 如果为 true,则不允许取消常驻
        ignoreCache?: boolean; //是否不缓存标签页,不缓存的标签页切换回来会重新加载
        link?: boolean|string;  // 是否是链接形式
        iframe?: boolean;  // 打开方式是否是 iframe, 需要同时设置 link 选项为 true
    }
}
