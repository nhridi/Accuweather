import { Label, Button } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";

class DownloadArticlaPage extends BasePage{

    constructor() {
        super(new Label('//*[@id="content"]//h1[contains(.,"Download as PDF")]', 'Unique Element for Article Download Page'));

        this.downloadPage = new Label('//*[@id="content"]//h1[contains(.,"Download as PDF")]', 'Article Download Page is displayed');

        this.pdfFileName = new Label('//div[@class="mw-electronpdfservice-selection-label-desc"]', 'Get PDF Name to Set as Downloaded File Name');
        this.downloadButton = new Button('//span[@class="oo-ui-labelElement-label"]');
    }

    async isDownloadPageDisplayed() {
        return this.downloadPage.getText();
    }
    
    async getFileName() {
        return await this.pdfFileName.getText();
    }

    async downloadPDF() {
        await this.downloadButton.click();
    }
}

export default new DownloadArticlaPage();