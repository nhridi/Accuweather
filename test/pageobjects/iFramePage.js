class IframePage {

    get iframe() {

        return $('iframe[title="W3Schools HTML Tutorial"]]'); //backup element: iframe[src="https://www.w3schools.com/html/default.asp"]
    }

    get htmlTutorialElement() {

        return $('//*[@id="main"]/h1');
    }

    get cssButton() {

        return $('div[id="subtopnav"] a[title="CSS Tutorial"]');
    }

    get cssTutorialElement() {

        return $('#main > h1');
    }

    get htmlIframeElement() {

        return $('//h1[contains(.,"HTML Iframes")]'); // '//h1[contains(.,"HTML Iframes")]'
    }

    async switchToIframe() {

        await this.iframe.waitForExist();
        await browser.switchToFrame(this.iframe);
    }

    async switchToParent() {

        await browser.switchToParentFrame();
    }

    async getTextHtmlTutorial() {

        await this.switchToIframe();
        const text = await this.htmlTutorialElement.getText();
        await this.switchToParent();
        return text;
    }

    async clickCssButtonAndCheckText() {

        await this.switchToIframe();
        await this.cssButton.click();
        const text = await this.cssTutorialElement.getText();
        await this.switchToParent();
        return text;
    }

    async getTextOutsideIframe() {

        return await this.htmlIframeElement.getText();
    }

}

export default new IframePage();