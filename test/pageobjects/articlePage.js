import { Button, Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";

class ArticlePage extends BasePage{

    constructor() {
        super(new Label('//span[normalize-space()="Article"]', "Unique Element for Article Page"));

        this.toolsDropdown = new Button('//*[@id="vector-page-tools-dropdown-checkbox"]', "Click Tools Dropdown Menu")
        this.downloadPdfOption = new Button('//*[@id="coll-download-as-rl"]');
        this.pageInformationOption = new Button('//*[@id="t-info"]');
    }
    
    async navigateToPageInformation() {
        await this.toolsDropdown.click();
        await this.pageInformationOption.click();
    }

    async downloadArticleAsPDF() {
        await this.toolsDropdown.click();
        await this.downloadPdfOption.scrollIntoView();
        await this.downloadPdfOption.click();
    }

    
}

export default new ArticlePage();