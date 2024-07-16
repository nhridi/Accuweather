import BasePage from "../../framework/page/BasePage.js";
import { Button, Label } from "../../framework/elements/index.js";

class ArticlePage extends BasePage{

    constructor() {
        super(new Label('//*[@id="vector-toc"]', 'Article Page'));

        this.toolsDropdown = new Button('//*[@id="vector-page-tools-dropdown"]', "Click Tools Dropdown Menu")
        this.downloadPdfOption = new Button('//*[@id="coll-download-as-rl"]');
        this.pageInformationOption = new Button('//*[@id="t-info"]');
    }

    async clickToolsMenu() {
        await this.toolsDropdown.click();
    }

    async downloadArticleAsPDF() {
        await this.downloadPdfOption.scrollIntoView();
        await this.downloadPdfOption.click();
    }

    async navigateToPageInformation() {
        await this.pageInformationOption.state().waitForClickable();
        await this.pageInformationOption.click();
    } 
}

export default new ArticlePage();
