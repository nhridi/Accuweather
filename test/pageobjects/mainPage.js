const { config } = require('../../wdio.conf');

class MainPage {

    constructor() {
        this.url = browser.config.baseUrl;
    }

    async open() {
        await browser.url(this.url);
    }
 }
 
 module.exports = new MainPage();