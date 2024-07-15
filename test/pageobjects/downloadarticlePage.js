import BasePage from "../../framework/page/BasePage.js";
import { Label, Button } from "../../framework/elements/index.js";
import { PreciseTextLocator } from "../../framework/utils/locatorHelper.js";

class DownloadArticlaPage extends BasePage{

    constructor() {
        super(new Label(PreciseTextLocator('Download as PDF'), 'Download Page'));

        this.downloadPage = (text) => (new Label(PreciseTextLocator), `Download: ${text}`);
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
