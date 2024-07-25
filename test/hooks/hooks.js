import Browser from "../../framework/browser/Browser.js";
import { mainConfig as mainConfig } from "../../framework/configs/main.wdio.conf.js";

export default class Hooks {
    static async beforeTest() {
        try {
            console.log('Opening browser with base URL:', mainConfig.baseUrl);
            await Browser.openUrl(mainConfig.baseUrl);
        } catch (error) {
            console.error('Failed to open browser:', error);
        }
    }

    static async afterTest() {
        try {
            console.log('Closing browser');
            await Browser.Window.closeCurrentWindow();
        } catch (error) {
            console.error('Failed to close browser:', error);
        }
    }
}