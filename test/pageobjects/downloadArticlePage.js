class DownloadArticlaPage {
    
    get pdfFileName() { 
        return $('//*[@id="mw-content-text"]/form/div/label/div[2]/div[2]').getText(); 
    }

    get downloadButton() {
        return $('//*[@id="mw-content-text"]/form/div/span/span/button/span[2]');
    }

    async getDownloadFileName() {
        return await this.pdfFileName;
    }

    async downloadPDF() {
        await this.downloadButton.click();
    }

}

export default new DownloadArticlaPage();