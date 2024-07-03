const MainPage = require('../pageobjects/mainPage');

describe('AccuWeather Test Suite', () => {
    before(async () => {
        await MainPage.open();
        await MainPage.consentDataUsage();
    });
});
