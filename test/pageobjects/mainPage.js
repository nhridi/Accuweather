
class MainPage {

    get consentButton() {
        return $('//div[contains(@class, "policy-accept")]');
    }

    get searchResultPlaceholder() {
        return $('input[placeholder="Search your Address, City or Zip Code"]');
    }

    get firstSearchResult() {
        return $('div.results-container > div.search-bar-result:first-child');
    }

    async acceptConsentButton() {
        await this.consentButton.waitForExist();
        await this.consentButton.click();
    }

    async searchCity(cityName) {
        await this.searchResultPlaceholder.click();
        await this.searchResultPlaceholder.setValue(cityName);
    }

    async clickFirstresult() {
        await this.firstSearchResult.waitForExist();
        await this.firstSearchResult.click();
    }
}

export default new MainPage();
