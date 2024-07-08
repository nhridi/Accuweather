class WikiPage {

    get searchInput() {
        return $('//*[@id="searchInput"]')
    }

    get searchButton() {
        return $('//*[@id="search-form"]/fieldset/button/i')
    }

    async searchForArticle(articleName) {
        await this.searchInput.setValue(articleName);
        await this.searchButton.click();
    }

}

export default new WikiPage();