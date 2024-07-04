import iFramePage from '../pageobjects/iFramePage.js';
import element from '../data/element.js';

describe('W3Schools Iframe Tests', () => {

    it('should verify the "HTML Tutorial" text inside the iframe', 'should click the CSS tutorial button and verify the "CSS Tutorial" text', 'should verify the "HTML Iframe" text outside the iframe', async () => {
        const htmlTutorial = await iFramePage.getTextHtmlTutorial();
        const cssTutorial = await iFramePage.clickCssButtonAndCheckText();
        const htmlIframeText = await iFramePage.getTextOutsideIframe();
        expect(htmlTutorial).toContain(element.htmlElement);
        expect(cssTutorial).toContain(element.cssElement);
        expect(htmlIframeText).toContain(element.iFrameElement);
    });
});