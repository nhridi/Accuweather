import { When } from "@wdio/cucumber-framework";
import cityWeatherPage from "../pageobjects/cityWeatherPage.js";
import { assert } from 'chai';
import mainPage from "../pageobjects/mainPage.js";

When(/^I see that city weather page header contains city name from the search$/, async () => {
    assert.isTrue(await cityWeatherPage.displayCityName(), 'City weather page header does not contains city name from the search.');
});

When(/^I go back to the main page$/, async () => {
    await cityWeatherPage.navigateBackToMainPage();
    assert.isTrue(await mainPage.isPageOpened(), 'AccuWeather main page is not displayed');
});