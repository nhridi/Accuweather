import BasePage from "../../framework/page/BasePage.js";
import Browser from "../../framework/browser/Browser.js";
import { Label } from "../../framework/elements/index.js";

class cityWeatherPage extends BasePage {
    constructor() {
        super(new Label('//div[contains(@class, "card-header")]'));

        this.cityName = new Label('h1.header-loc');
    }

    async displayCityName() {
        await this.cityName.getText();
    }

    async navigateBackToMainPage() {
        await Browser.Window.back();
    }

}

export default new cityWeatherPage();