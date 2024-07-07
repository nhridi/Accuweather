import wikiPage from '../pageobjects/wikiPage.js';
import element from '../data/element.js';
import { checkFileExists } from '../utils/fileUtils.js';
import { downloadDir } from '../environment/directories.js';
import path from 'path';

describe('Wikipedia Albert Einstein Information Download', () => {
    const fileName = 'Albert_Einstein.pdf';
    it('should display the main page correctly', async () => {
        await browser.url('/');
        await expect(browser).toHaveTitleContaining(element.name);
    });
    
    it('should download the PDF for Albert Einstein', async () => {
        await wikiPage.searchForArticle(element.subjectName);
        await wikiPage.navigateToDownloadPDF();
        await wikiPage.downloadPDF();

        const downloadsFolder = path.join('C:', 'Users', 'n.hridi', 'Downloads');
        const dynamicFileName = await wikiPage.getDownloadFileName();
        const fullPath = path.join(downloadsFolder, dynamicFileName.trim());
        
        const isDownloaded = await checkFileExists(fullPath, 10000); 
        expect(isDownloaded).toBeTruthy();
    });
    
});