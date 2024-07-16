import { Given, When, } from "@wdio/cucumber-framework";
import wikiPage from '../pageobjects/wikiPage.js';
import Browser from "../../framework/browser/Browser.js";
import { assert } from 'chai';

Given(/^I open the main page of Wikipedia$/, async () => {
    await Browser.openUrl('/');

    assert.isTrue(await wikiPage.isPageOpened(), 'Wikipedia main page is not displayed');
});

When(/^I input "(.+)" in the search field$/, async (article) => {
    await wikiPage.searchForArticle(article);
});

When(/^I change the search language to "(.+)"$/, async (language) => {
    await wikiPage.selectLanguageOption(language);
});

When(/^I click the submit button to go to the article page$/, async () => {
    await wikiPage.clickSearchButton();
});