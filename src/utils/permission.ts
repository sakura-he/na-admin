// 超级管理员权限
export const SUPER_ADMIN_PERSISSION = "*";
// 权限格式 模块.菜单.按钮
export function hasPersission(persissions: string[]) {
    // 获取当前用户拥有的权限
    let ownPersissions: string[] = ["*"]; // 用户拥有所有权限
    if (ownPersissions.includes(SUPER_ADMIN_PERSISSION)) {
        return true;
    }
    // 没有传入验证的权限，直接返回true
    if (!persissions.length) {
        return true;
    }
    // 遍历接收到的权限数组，判断有没有权限
    return persissions.some((persission) => {
        return ownPersissions.some((ownPersission) => {
            // 将权限拆根据 '.' 拆分，然后对每位进行比较
            let needPersissionArr = persission.split(".");
            let ownPersissionArr = ownPersission.split(".");
            for (let i = 0; i < needPersissionArr.length; i++) {
                if (needPersissionArr[i] === undefined) {
                    console.log(new Error("验证权限失败, 权限" + persission + "格式不正确"));
                    return false;
                }
                // 如果拥有的权限验证的位为‘*’则表示拥有该位的所有权限，直接通过
                if (ownPersissionArr[i] === SUPER_ADMIN_PERSISSION) {
                    console.log("拥有所有权限，通过", i);
                    return true;
                }
                if (needPersissionArr[i] !== ownPersissionArr[i]) {
                    return false;
                }
            }
            return true;
        });
    });
}
