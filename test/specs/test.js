import iFramePage from '../pageobjects/iFramePage.js';
import element from '../data/element.js';

describe('W3Schools Iframe Tests', () => {

    it('should verify the "HTML Tutorial" text inside the iframe', 'should click the CSS tutorial button and verify the "CSS Tutorial" text', 'should verify the "HTML Iframe" text outside the iframe', async () => {
        const htmlTutorial = await iFramePage.getTextHtmlTutorial();
        expect(htmlTutorial).toContain(element.htmlElement);

        const cssTutorial = await iFramePage.clickCssButtonAndCheckText();
        expect(cssTutorial).toContain(element.cssElement);
        
        const htmlIframeText = await iFramePage.getTextOutsideIframe();
        expect(htmlIframeText).toContain(element.iFrameElement);
    });
});