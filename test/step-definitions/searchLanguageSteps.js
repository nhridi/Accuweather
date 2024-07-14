import { Given, When, Then } from "@wdio/cucumber-framework";
import wikiPage from '../pageobjects/wikiPage.js';
import articlePage from '../pageobjects/articlePage.js';
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

Then('the article page for Gabriel García Márquez in Spanish is displayed', async () => {
    const isArticlePageVisible = await articlePage.isArticlePageIsDisplayed(article);
    assert.isTrue(isArticlePageVisible, 'Article Page is not visible');
})