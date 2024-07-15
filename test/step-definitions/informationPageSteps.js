import { Then } from "@wdio/cucumber-framework";
import informationPage from '../pageobjects/informationPage.js';
import { assert } from 'chai';

Then(/^The information page for "(.+)" is displayed$/, async (article) => {
    const isInformationPageVisible = await informationPage.isInformationPageIsDisplayed();
    assert.isTrue(isInformationPageVisible, 'Information page is not displayed');
});