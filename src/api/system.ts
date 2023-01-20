import { request } from "./index";

export function getSystemMenuList() {
    return request("/api/system/menu/list", {
        method: "get",
    });
}
