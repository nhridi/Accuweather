import wikiPage from '../pageobjects/wikiPage.js';
import articlePage from '../pageobjects/articlePage.js';
import downloadArticlePage from '../pageobjects/downloadArticlePage.js';
import element from '../data/element.js';
// import { ensureDownloadDirectoryExists, checkFileExists } from '../utils/fileUtils.js';
// import {downloadDir} from '../environment/directories.js';
// import path from 'path';

describe('Wikipedia Albert Einstein Information Download', () => {
    it('should display the main page correctly', async () => {
        await browser.url('/');
        await expect(browser).toHaveTitleContaining(element.name);

        await wikiPage.searchForArticle(element.subjectName);
        await articlePage.navigateToDownloadPDF();
        await downloadArticlePage.downloadPDF();

        // const dynamicFileName = await wikiPage.getDownloadFileName();
        // const fullPath = path.join(downloadDir, 'chrome', dynamicFileName.trim());
        // await ensureDownloadDirectoryExists();
        // const isDownloaded = await checkFileExists(fullPath, 10000); 
        // expect(isDownloaded).toBeTruthy();

    });
});