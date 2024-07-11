import { Label, Button, Dropdown, Input, TextBox,  } from '../../framework/elements/index.js';
import BasePage from '../../framework/page/BasePage.js';

class WikiPage extends BasePage {
    constructor() {
        super(new Label('//*[@id="www-wikipedia-org"]/main/div[contains(.,"Wikipedia")]', "Unique Element for Wikipedia Main Page"));

        this.wikipediaPage = new Label('//*[@id="www-wikipedia-org"]/main/div[contains(.,"Wikipedia")]', "Wikipedia Main Page is dispalyed")
        this.languageOption = new Button('//*[@id="searchLanguage"]', 'Language Dropdown');
        //this.setLanguageOption = new Dropdown('//*[@id="searchLanguage"]/option[contains(.,"Español")]')
        this.searchInput = new Input('//*[@id="searchInput"]', 'Search Article by Name');
        this.searchButton = new Button('#search-form > fieldset > button', 'Click Search Button');

    }

    async mainPageIsDisplayed() {
        return this.wikipediaPage.getText();
    }

    async selectLanguageOption(selectLanguage) {
        //await this.languageOption.click();
        await this.languageOption.selectOptionByText(selectLanguage);
    }
    async searchForArticle(articleName) {
        await this.searchInput.typeTextWithClear(articleName);
        await this.searchButton.click();
    }

}

export default new WikiPage();