const { config } = require('../../wdio.conf');

class MainPage {

    constructor() {
        this.url = config.baseUrl;
        this.consentButtonSelector = '#privacy-policy-banner .banner-button.policy-accept'; 
    }

    async open() {
        await browser.url(this.url);
    }

    async consentDataUsage() {
        await browser.waitForExist(this.consentButtonSelector, 5000);
        const isConsentButtonVisible = await browser.isExisting(this.consentButtonSelector);
        if (isConsentButtonVisible) {
            await browser.click(this.consentButtonSelector);
        }
    }
}
 
 module.exports = new MainPage();
