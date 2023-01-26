import { setupMock, successResponseWrap, failResponseWrap } from "@/utils/mock";
import { mock, Random } from "mockjs";
import preset from "@/router/preset.json";

// 注册user相关接口的mock
let setup = () => {
    mock(new RegExp("/api/user/login"), (options: any) => {
        let token = Random.string(32);
        const { username, password } = JSON.parse(options.body);
        if (!username) {
            return failResponseWrap(null, "用户名不能为空", 50000);
        }
        if (!password) {
            return failResponseWrap(null, "密码不能为空", 50000);
        }
        if (username === "admin" && password === "admin") {
            return successResponseWrap(token);
        }
        if (username === "user" && password === "user") {
            return successResponseWrap(token);
        }
        return failResponseWrap(null, "账号或者密码错误", 50000);
    });
    // 模拟异步路由列表数据
    mock(new RegExp("/api/user/menu"), () => {
        return successResponseWrap(preset);
    });
    // 模拟用户信息
    mock(new RegExp("/api/user/info"), (options: any) => {
        const { token } = JSON.parse(options.body);
        if (!token) {
            return failResponseWrap(null, "登录过期", 401);
        }
        let data = {
            nick_name: 'admin',
            id: 234234,
            phone: 13288887777,
            permissions: ['admin.*'],
            gender: 1,
        }
        return successResponseWrap(data);
    });
};
export default function setupUserMock() {
    setup();
}
