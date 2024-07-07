import wikiPage from '../pageobjects/wikiPage.js';
import element from '../data/element.js';

describe('Wikipedia Albert Einstein Information Download', () => {
    it('should display the main page correctly', async () => {
        await browser.url('/');
        await expect(browser).toHaveTitleContaining(element.name);
    });
    
    it('should download the PDF for Albert Einstein', async () => {
        await wikiPage.searchForArticle(element.subjectName);
        await wikiPage.navigateToDownloadPDF();
        await wikiPage.downloadPDF();

        
    });
});