const { config } = require('../../wdio.conf');

class MainPage {

    constructor() {
        this.url = config.baseUrl;
        this.consentButtonSelector = '#privacy-policy-banner .banner-button.policy-accept'; 
    }

    async open() {
        try {
            await browser.url(this.url);
        } catch (error) {
            console.error('Error opening the page:', error);
        }
    }

    async consentDataUsage() {
        await browser.waitForDisplayed(this.consentButtonSelector, {
            timeout: 5000,
            timeoutMsg: 'Consent button was not displayed in time'
        });
        const isConsentButtonVisible = await browser.isDisplayed(this.consentButtonSelector);
        if (isConsentButtonVisible) {
            await browser.click(this.consentButtonSelector);
        }
    }
}
 
 module.exports = new MainPage();
