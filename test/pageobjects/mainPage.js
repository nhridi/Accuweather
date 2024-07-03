
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

    async acceptConsentButton() {
        await this.consentButton.waitForExist();
        await this.consentButton.click();
    }
}

export default new MainPage();
