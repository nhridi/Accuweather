import BasePage from '../../framework/page/BasePage.js';
import { Label, Button, Input, Dropdown } from '../../framework/elements/index.js';
class WikiPage extends BasePage {
    constructor() {
        
        super(new Label('//div[contains(@class,"central-textlogo")]', 'Main Page'));
        this.languageOption = new Dropdown('//*[@id="search-input"]//*[@id="searchLanguage"]', 'Language Dropdown');
        this.searchInput = new Input('//*[@id="searchInput"]', 'Search Article by Name');
        this.searchButton = new Button('#search-form > fieldset > button', 'Click Search Button');

    }

    async selectLanguageOption(selectLanguage) {
        await this.languageOption.selectOptionByText(selectLanguage);

    }

    async searchForArticle(articleName) {
        await this.searchInput.typeTextWithClear(articleName); 
    }

    async clickSearchButton() {
        await this.searchButton.state().waitForDisplayed();
        await this.searchButton.click();
    }

}

export default new WikiPage();
