
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

    get searchResultList() {
        return $('input[placeholder="Search your Address, City or Zip Code"]');
    }

    async acceptConsentButton() {
        await this.consentButton.waitForExist();
        await this.consentButton.click();
    }

    async searchNewYork() {
        await this.searchResultList.click();
        await this.searchResultList.setValue('New York');
    }
}

export default new MainPage();
