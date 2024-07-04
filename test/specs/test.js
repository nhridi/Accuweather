import mainPage from '../pageobjects/mainPage.js';

describe('AccuWeather Test Suite', () => {
    it('consenting to data usage and allow cookie, click on the search box and write "New York", select first element of the test result',async () => {
        await mainPage.acceptConsentButton();
        await mainPage.searchCity();
        await mainPage.clickFirstresult();
    });
});

// describe('accuWeather Search Suite', () => {
//     it('click on the search box and write "New York"', async () => {
//         await mainPage.searchCity();
//     })
// })

// describe('accuWeather Select Suite', () => {
//     it('select first element of the test result', async () => {
//         await mainPage.clickFirstresult();
//     })
// })
