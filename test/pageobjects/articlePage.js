class ArticlePage {
    get toolsButton() {
        return $('//*[@id="vector-page-tools-dropdown-checkbox"]')
    }

    get downloadPdfLink() {
        return $('#coll-download-as-rl');
    }

    async navigateToDownloadPDF() {
        await this.toolsButton.click();
        await this.downloadPdfLink.scrollIntoView();
        await this.downloadPdfLink.click();
    }
}

export default new ArticlePage();