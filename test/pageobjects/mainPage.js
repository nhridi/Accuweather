import BasePage from "../../framework/page/BasePage.js";
import { Label, Button, Input, Dropdown } from "../../framework/elements/index.js";

class MainPage extends BasePage {

    constructor() {
        super(new Label('//div[@class="featured-locations"]'));

        this.consentButton = new Button('//div[contains(@class, "policy-accept")]', 'Consent data usage');
        this.searchResultPlaceholder = new Input('//div[contains(@class, "searchbar-content")]', 'Select search placeholder to write');
        this.resultList = new Dropdown('//div[@class="results-container"]', 'Search results list');
        this.firstSearchResult = new Label('div.results-container > div.search-bar-result:first-child', 'Select the first result from the dropdown');
        this.firstCity = new Label('div.featured-locations a:first-of-type', 'Select the featured location');
        this.currentLocation = new Label('//div[@class="search-bar-result current-location-result"]')
    }

    async acceptConsentButton() {
        await this.consentButton.state().waitForClickable();
        await this.consentButton.click();
    }

    async searchCity(cityName) {
        await this.searchResultPlaceholder.click();
        await this.searchResultPlaceholder.typeTextWithClear(cityName);
    }

    async resultListDisplayed() {
        await this.resultList.state.isDisplayed();
    }

    async clickFirstResult() {
        await this.firstSearchResult.state().waitForClickable();
        await this.firstSearchResult.click();
    }

    async clickFirstCityRecentLocations() {
        await this.firstCity.click();
    }

    async isLocationLabelDisplayed() {
        await this.currentLocation.state().isDisplayed();
    }
}

export default new MainPage();