import { Given, When, Then } from "@wdio/cucumber-framework";
import wikiPage from '../pageobjects/wikiPage.js';
import articlePage from '../pageobjects/articlePage.js';
import informationPage from '../pageobjects/informationPage.js'
import Browser from "../../framework/browser/Browser.js";
import { assert } from 'chai';

Given('I open the main page of Wikipedia', async ()=> {
    await Browser.openUrl('https://www.wikipedia.org/');
    const isMainPageVisible = await wikiPage.mainPageIsDisplayed();
    assert.isTrue(isMainPageVisible, 'Wikipedia main page is not displayed');
});

When('I input "{string}" in the search field and click the submit button to go to the article page', async (article) => {
    await wikiPage.searchForArticle(article);
});

When('I click the Tools menu button and select the "Page Information" option and it opens a new page showing Page Information', async () => {
    await articlePage.navigateToPageInformation();
});

Then('The information page for the Bengal tiger article is displayed', async () => {
    const isInformationPageVisible = await informationPage.isInformationPageIsDisplayed();
    assert.isTrue(isInformationPageVisible, 'Information page is not dispalyed');
});