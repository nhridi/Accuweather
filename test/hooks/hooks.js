import Browser from "../../framework/browser/Browser.js";
import { mainConfig } from "../../framework/configs/main.wdio.conf.js";
import { defaultWindowSize } from "../../framework/constants/windowElement.js";
import {Before, After, BeforeAll} from "@wdio/cucumber-framework";

BeforeAll(async () => {
    await Browser.openUrl(mainConfig.baseUrl);
    await Browser.Window.resize(defaultWindowSize);
});

// After(async () => {
//     await Browser.Window.closeCurrentWindow();
// });