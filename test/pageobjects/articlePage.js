class ArticlePage {
    get toolsButton() {
        return $('//*[@id="vector-page-tools-dropdown-checkbox"]')
    }

    get downloadPdfLink() {
        return $('//*[@id="coll-download-as-rl"]/a/span');
    }

    async navigateToDownloadPDF() {
        await this.toolsButton.click();
        await this.downloadPdfLink.scrollIntoView();
        await this.downloadPdfLink.click();
    }
}

export default new ArticlePage();