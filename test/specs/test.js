import wikiPage from '../pageobjects/wikiPage.js';
import articlePage from '../pageobjects/articlePage.js';
import downloadArticlePage from '../pageobjects/downloadArticlePage.js';
import element from '../data/element.js';
import path from 'path'; 
import fs from 'fs';

describe('Wikipedia Albert Einstein Information Download', () => {
    it('should display the main page correctly then take input for an article and download it for PDF', async () => {
        await browser.url('/');
        await expect(browser).toHaveTitleContaining(element.name);
        
        await wikiPage.searchForArticle(element.subjectName);
        await articlePage.navigateToDownloadPDF();
        await downloadArticlePage.downloadPDF();

        before("create downloads folder", async () => {
            fs.mkdirSync(global.downloadDir);
        });

        const fileName = await downloadArticlePage.getDownloadFileName();
        
        let downloadFilePath = path.join(global.downloadDir, fileName);

        await browser.waitUntil(() => fs.existsSync(downloadFilePath));
        expect(fs.existsSync(downloadFilePath)).toBeTruthy();

    });
});