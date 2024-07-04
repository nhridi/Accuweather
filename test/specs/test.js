import mainPage from '../pageobjects/mainPage.js';
import testCities from '../data/cities.js';

describe('AccuWeather Test Suite', () => {
    it('consenting to data usage and allow cookie, click on the search box and write "New York", select first element of the test result',async () => {
        await mainPage.acceptConsentButton();
        await mainPage.searchCity(testCities.newYork);
        await mainPage.clickFirstresult();

        const searchResultsDisplayed = await $('div.results-container > div.search-bar-result:first-child').waitForExist();
        expect(searchResultsDisplayed).toBe(true);
 
        const headerText = await $('h1.header-loc').getText();
        expect(headerText).toContain('New York', 'City name in header does not match');
    });
});
