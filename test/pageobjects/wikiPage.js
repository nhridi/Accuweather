import BasePage from '../../framework/page/BasePage.js';
import { Label, Button, Dropdown, Input, TextBox,  } from '../../framework/elements/index.js';
import { PreciseTextLocator } from "../framework/utils/locatorHelper.js";

class WikiPage extends BasePage {
    constructor() {
        // super(new Label('//*[@id="www-wikipedia-org"]/main/div[contains(.,"Wikipedia")]', "Unique Element for Wikipedia Main Page"));

        // this.wikipediaPage = new Label('//*[@id="www-wikipedia-org"]/main/div[contains(.,"Wikipedia")]', "Wikipedia Main Page is dispalyed")

        super(new Label(PreciseTextLocator('The Free Encyclopedia'), 'Main Page'));

        this.wikipediaPage = (text) => (new Label(PreciseTextLocator), `Main Page: ${text}`);

        this.languageOption = new Button('//*[@id="searchLanguage"]', 'Language Dropdown');
        this.searchInput = new Input('//*[@id="searchInput"]', 'Search Article by Name');
        this.searchButton = new Button('#search-form > fieldset > button', 'Click Search Button');

    }

    async mainPageIsDisplayed() {
        return this.wikipediaPage.isPageOpened();
    }

    async selectLanguageOption(selectLanguage) {
        await this.languageOption.selectOptionByText(selectLanguage);
    }
    async searchForArticle(articleName) {
        await this.searchInput.typeTextWithClear(articleName);
        await this.searchButton.click();
    }

}

export default new WikiPage();