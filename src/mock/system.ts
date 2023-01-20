import { mock, Random } from "mockjs";
import { setupMock, successResponseWrap, failResponseWrap } from "@/utils/mock";
import asyncMenuData from "@/router/preset.json";

let setup = () => {
    mock(new RegExp("/api/system/menu/list"), (options: any) => {
        let data: any = asyncMenuData;
        return successResponseWrap(data);
    });
};

export default function setupSystemMock() {
    setup();
}
