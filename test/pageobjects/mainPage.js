
class MainPage {

    // constructor(selector) {
    //     this.consentButtonSelector = '//*[@id="privacy-policy-banner"]/div/div';;
    // }

    // async consentDataUsage() {
    //     await $(this.consentButtonSelector).waitForExist();
    //     await $(this.consentButtonSelector).click();
    // }

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

    async searchCity() {
        await this.searchResultPlaceholder.click();
        await this.searchResultPlaceholder.setValue('New York');
    }

    async clickFirstresult() {
        await this.firstSearchResult.waitForExist();
        await this.firstSearchResult.click();
    }
}

export default new MainPage();
