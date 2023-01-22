import { createPinia } from "pinia";
let pinia = createPinia();
export { useUserStore, subscribeUserStore } from "./modules/user";
export { useConfigStore, subscribeConfigStore } from "./modules/config";
export { useMultipleTabs, subscribeMultipleTabsStore } from "./modules/mutipleTab";
export { useNavigateStore, subscribeNavigateStore } from "./modules/navigate";
export { pinia };
