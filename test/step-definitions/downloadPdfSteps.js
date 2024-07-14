import { Given, When, Then } from "@wdio/cucumber-framework";
import wikiPage from '../pageobjects/wikiPage.js';
import articlePage from '../pageobjects/articlePage.js';
import downloadArticlePage from '../pageobjects/downloadArticlePage.js';
import Browser from "../../framework/browser/Browser.js";
import BasePage from '../../framework/page/BasePage.js';
import element from '../data/element.js';
import path from 'path'; 
import fs from 'fs';
import { assert } from 'chai';

Given('I open the main page of Wikipedia', async ()=> {
    await Browser.openUrl('https://www.wikipedia.org/');
    const isMainPageVisible = await wikiPage.mainPageIsDisplayed();
    assert.isTrue(isMainPageVisible, 'Wikipedia main page is not displayed');
});

When('I input "{string}" in the search field and click the submit button to go to the article page', async (article) => {
    await wikiPage.searchForArticle(article);
});

When('I click the Tools menu button and select the Download as PDF option and it opens a new page for download', async () => {
    await articlePage.downloadArticleAsPDF();
});

When('I navigate to the download page', async () => {

    const isDownloadPageReady = await downloadArticlePage.isDownloadPageDisplayed();
    assert.isTrue(isDownloadPageReady, 'Download page is not ready');
});

When('I click the Download button to download the file', async () => {
    await downloadArticlePage.downloadPDF();
});

Then('I should see "{string}" in the downloads folder', async (file) => {
    const downloadFilePath = path.join(downloadDir, file);
    const fileExists = await fs.pathExists(downloadFilePath);
    assert.isTrue(fileExists, `File ${file} does not exist in the downloads folder`);
});




