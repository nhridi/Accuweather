import BasePage from "../../framework/page/BasePage.js";
import { Button, Label } from "../../framework/elements/index.js";
import { PartialTextLocator } from "../../framework/utils/locatorHelper.js";

class ArticlePage extends BasePage{

    constructor() {
        super(new Label(PartialTextLocator('the free encyclopedia'), 'Article Page'));

        this.infoPage = (text) => (new Label(PartialTextLocator), `Article: ${text}`);
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
        await this.pageInformationOption.click();
    }

    async isArticlePageIsDisplayed(articleText) {
        await this.infoPage(articleText).isPageOpened();
    }
    
}

export default new ArticlePage();
