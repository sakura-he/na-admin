// 超级管理员权限常量
export const SUPER_ADMIN_Permission = "*";
import { useUserStore } from '@/store'
/**
 * 验证传入指定的权限字符串有没有权限 
 * @param permissions string[] 格式 "模块.菜单.按钮"
 * @returns boolean
 */
export function hasPermission(permissions: string[]) {
    let userStore = useUserStore();
    // 获取当前用户拥有的权限
    let ownPermissions: string[] = userStore.permissions;
    console.log(ownPermissions,permissions)
    if (ownPermissions.includes(SUPER_ADMIN_Permission)) {
        return true;
    }
    // 没有传入验证的权限，直接返回true通过
    if (!permissions.length) {
        return true;
    }
    // 遍历接收到的权限数组，判断有没有权限
    return permissions.some((permission) => {
        return ownPermissions.some((ownPermission) => {
            // 将权限拆根据 '.' 拆分，然后对每位进行比较
            let needPermissionArr = permission.split(".");
            let ownPermissionArr = ownPermission.split(".");
            for (let i = 0; i < needPermissionArr.length; i++) {
                if (needPermissionArr[i] === undefined) {
                    console.log(new Error("验证权限失败, 权限" + permission + "格式不正确"));
                    return false;
                }
                // 如果拥有的权限验证的位为‘*’则表示拥有该位的所有权限，直接通过
                if (ownPermissionArr[i] === SUPER_ADMIN_Permission) {
                    return true;
                }
                if (needPermissionArr[i] !== ownPermissionArr[i]) {
                    return false;
                }
            }
            return true;
        });
    });
}
