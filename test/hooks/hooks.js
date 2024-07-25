import Browser from "../../framework/browser/Browser.js";
import { mainConfig as mainConfig } from "../../framework/configs/main.wdio.conf.js";

export default class Hooks {
    static async beforeTest() {
        console.log('Opening browser with base URL:', mainConfig.baseUrl);
        await Browser.openUrl(mainConfig.baseUrl);
    }

    static async afterTest() {
        console.log('Closing browser');
        await Browser.Window.closeCurrentWindow();
    }
}