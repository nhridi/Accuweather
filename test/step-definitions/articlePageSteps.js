import { When, Then } from "@wdio/cucumber-framework";
import articlePage from '../pageobjects/articlePage.js';
import { assert } from 'chai';

When(/^I click the Tools menu button and select the Download as PDF option$/, async () => {
    await articlePage.clickToolsMenu();
    await articlePage.downloadArticleAsPDF();
});

When(/^I click the Tools menu button and select the Page information option$/, async () => {
    await articlePage.clickToolsMenu();
    await articlePage.navigateToPageInformation();
});

Then(/^the article page for "(.+)" in "(.+)" is displayed$/, async (article, language) => {
    const isArticlePageVisible = await articlePage.isArticlePageIsDisplayed();
    assert.isTrue(isArticlePageVisible, `Article page for ${article} in ${language} is not visible`);
});