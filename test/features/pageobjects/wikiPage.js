class WikiPage {

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