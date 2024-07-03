const consentButtonSelector = await $$('//*[@id="privacy-policy-banner"]/div/div');
class MainPage {

    constructor(selector) {
        this.consentButtonSelector = selector;
    }

    async consentDataUsage() {
        await this.consentButtonSelector.waitForExist({ timeout: 5000 });
        const isConsentButtonVisible = await this.consentButtonSelector.isDisplayed();
        if (isConsentButtonVisible) {
            await this.consentButtonSelector.click();
        }
    }
}

const mainPage = new MainPage(consentButtonSelector);
export default new MainPage();
