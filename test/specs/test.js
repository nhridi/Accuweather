import iFramePage from '../pageobjects/iFramePage.js';
import element from '../data/element.js';

describe('W3Schools Iframe Tests', () => {

    it('should verify the "HTML Tutorial" text inside the iframe', async () => {
        const text = await iFramePage.getTextHtmlTutorial();
        expect(text).toContain(element.htmlElement);
    });

    it('should click the CSS tutorial button and verify the "CSS Tutorial" text', async () => {
        const text = await iFramePage.clickCssButtonAndCheckText();
        expect(text).toContain(element.cssElement);
    });

    it('should verify the "HTML Iframe" text outside the iframe', async () => {
        const text = await iFramePage.getTextOutsideIframe();
        expect(text).toContain(element.iFrameElement);
    });
});