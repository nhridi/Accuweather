import Browser from "../../framework/browser/Browser.js";
import { mainConfig } from "../../framework/configs/main.wdio.conf.js";
import { defaultWindowSize } from "../../framework/constants/windowElement.js";
import {Before, AfterAll } from "@wdio/cucumber-framework";

Before(async () => {
    await Browser.openUrl(mainConfig.baseUrl);
    await Browser.Window.resize(defaultWindowSize);
});

AfterAll(async () => {
    await Browser.Window.closeCurrentWindow();
});