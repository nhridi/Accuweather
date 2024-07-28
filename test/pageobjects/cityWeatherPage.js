import BasePage from "../../framework/page/BasePage.js";
import Browser from "../../framework/browser/Browser.js";
import { Label } from "../../framework/elements/index.js";

class cityWeatherPage extends BasePage {
    constructor() {
        super(new Label('//div[contains(@class, "card-header")]'), 'cityPage');

        this.cityName = new Label('//h1[@class="header-loc"]', 'city name');
    }

    async isCityNameDisplayed() {
        return await this.cityName.state().waitForDisplayed();
    }

    async navigateBackToMainPage() {
        await Browser.Window.back();
    }

}

export default new cityWeatherPage();