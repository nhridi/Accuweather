import { Given, When, } from "@wdio/cucumber-framework";
import wikiPage from '../pageobjects/wikiPage.js';
import Browser from "../../framework/browser/Browser.js";
import { assert } from 'chai';

Given(/^I open the main page of Wikipedia$/, async () => {
    await Browser.openUrl('/');
    // const isMainPageVisible = await wikiPage.mainPageIsDisplayed();
    // assert.isTrue(isMainPageVisible, 'Wikipedia main page is not displayed');
});

When(/^I input "(.+)" in the search field and click the submit button to go to the article page$/, async (article) => {
    await wikiPage.searchForArticle(article);
    await wikiPage.clickSearchButton();
});

When(/^I change the search language to "(.+)"$/, async (language) => {
    await wikiPage.selectLanguageOption(language);
});

When(/^I input "(.+)" in the search field, and click the submit button$/, async (article, language) => {
    await wikiPage.searchForArticle(article); 
    await wikiPage.selectLanguageOption(language);
    await wikiPage.clickSearchButton();
});