import { App } from "vue";
import installLoadingDirective from "./loading";
import installPermissionDirective from "./permission";
export default function setupGlobalDirectives(app: App) {
    installPermissionDirective(app);
    installLoadingDirective(app);
}
