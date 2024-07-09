class DownloadArticlaPage {
    
    get pdfFileName() { 
        return $('//div[@class="mw-electronpdfservice-selection-label-desc"]').getText(); 
    }

    get downloadButton() {
        return $('//span[@class="oo-ui-labelElement-label"]');
    }

    async getDownloadFileName() {
        return await this.pdfFileName;
    }

    async downloadPDF() {
        await this.downloadButton.click();
    }

}

export default new DownloadArticlaPage();