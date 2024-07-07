class WikiPage {

    get searchInput() {
        return $('//*[@id="searchInput"]')
    }

    get searchButton() {
        return $('//*[@id="search-form"]/fieldset/button/i')
    }

    get toolsButton() {
        return $('//*[@id="vector-page-tools-dropdown-checkbox"]')
    }

    get pdfFileName() { 
        return $('//*[@id="mw-content-text"]/form/div/label/div[2]/div[2]').getText(); 
    }

    get downloadPdfLink() {
        return $('//*[@id="coll-download-as-rl"]/a/span');
    }

    get downloadButton() {
        return $('//*[@id="mw-content-text"]/form/div/span/span/button/span[2]');
    }

    async searchForArticle(articleName) {
        await this.searchInput.setValue(articleName);
        await this.searchButton.click();
    }

    async navigateToDownloadPDF() {
        await this.toolsButton.click();
        await this.downloadPdfLink.scrollIntoView();
        await this.downloadPdfLink.click();
    }

    async getDownloadFileName() {
        return await this.pdfFileName;
    }

    async downloadPDF() {
        await this.downloadButton.click();
    }

}

export default new WikiPage();