import { When, Then } from "@wdio/cucumber-framework";
import cityWeatherPage from "../pageobjects/cityWeatherPage.js";
import { assert } from 'chai';

When(/^I go to the city weather page$/, async () => {
    await cityWeatherPage.isPageOpened();
})

When(/^I go back to the main page$/, async () => {
    await cityWeatherPage.navigateBackToMainPage();
});

Then(/^I see that city weather page header contains city name from the search$/, async () => {
    assert.isTrue(await cityWeatherPage.displayCityName(), 'City weather page header does not contains city name from the search.');
});