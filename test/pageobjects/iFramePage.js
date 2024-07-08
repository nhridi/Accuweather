class IframePage {

    get iframe() {

        return $('//iframe[@title="W3Schools HTML Tutorial"]');
    }

    async switchToIframe() {

        await this.iframe.waitForExist();
        await browser.switchToFrame(this.iframe);
    }

    async switchToParent() {

        await browser.switchToParentFrame();
    }

    get htmlTutorialElement() {

        return $('//h1[contains(.,"HTML Tutorial")]');
    }

    
    async getTextHtmlTutorial() {

        await this.switchToIframe();
        const text = await this.htmlTutorialElement.getText();
        return text;
    }

    get cssButton() {

        return $('div[id="subtopnav"] a[title="CSS Tutorial"]');
    }

    get cssTutorialElement() {

        return $('//h1[contains(.,"CSS Tutorial")]');
    }
    
    async clickCssButtonAndCheckText() {

        await this.cssButton.click();
        const text = await this.cssTutorialElement.getText();
        await this.switchToParent();
        return text;
    }

    get htmlIframeElement() {

        return $('//h1[contains(.,"HTML Iframes")]');
    }

    async getTextOutsideIframe() {

        return await this.htmlIframeElement.getText();
    }

}

export default new IframePage();