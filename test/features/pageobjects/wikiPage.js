class WikiPage {

    get languageOption() {
        return $('//*[@id="searchLanguage"]');
    }

    get selectLanguage() {
        return $('//*[@id="searchLanguage"]/option[contains(.,"Español")]');
    }

    async selectLanguageOption() {
        await this.languageOption.click();
        await this.selectLanguage.scrollIntoView();
        await this.selectLanguage.click()
    }

    get searchInput() {
        return $('//*[@id="searchInput"]')
    }

    get searchButton() {
        return $('#search-form > fieldset > button')
    }

    async searchForArticle(articleName) {
        await this.searchInput.setValue(articleName);
        await this.searchButton.click();
    }
}

export default new WikiPage();