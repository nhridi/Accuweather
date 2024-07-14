import BasePage from "../../framework/page/BasePage.js";
import { Label } from "../../framework/elements/index.js";
import { PreciseTextLocator } from "../framework/utils/locatorHelper.js";

class InformationPage extends BasePage {
    constructor() {
        super(new Label(PreciseTextLocator('Information for "Bengal tiger"'), 'Information Page'));

        this.infoPage = (text) => (new Label(PreciseTextLocator), `Information: ${text}`);
    }

    async isInformationPageIsDisplayed(informationText) {
        await this.infoPage(informationText).isPageOpened();
    }
}

