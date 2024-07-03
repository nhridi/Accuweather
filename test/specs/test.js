import mainPage from '../pageobjects/mainPage.js';

describe('AccuWeather Test Suite', () => {
    it('consenting to data usage and allow cookie',async () => {
        await mainPage.consentDataUsage();
    });
});
