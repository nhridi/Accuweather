import wikiPage from '../pageobjects/wikiPage.js';
import element from '../data/element.js';
// import { ensureDownloadDirectoryExists } from '../utils/fileUtils.js';
// import {downloadDir} from '../environment/directories.js';
// import path from 'path';

describe('Wikipedia Albert Einstein Information Download', () => {
    it('should display the main page correctly', async () => {
        await browser.url('/');
        await expect(browser).toHaveTitleContaining(element.name);

        await wikiPage.searchForArticle(element.subjectName);
        await wikiPage.navigateToDownloadPDF();
        await wikiPage.downloadPDF();

        // const fullPath = path.join(downloadDir, 'chrome', dynamicFileName.trim());
        // const isDownloaded = await ensureDownloadDirectoryExists(fullPath, 10000); 
        // expect(isDownloaded).toBeTruthy();

    });
});