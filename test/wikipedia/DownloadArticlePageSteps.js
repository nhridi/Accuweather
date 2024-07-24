import downloadArticlePage from '../pageobjects/downloadArticlePage.js';
import {File} from '../../framework/browser/entities/File.js'
import { When, Then } from "@wdio/cucumber-framework";
import { downloadDir } from "../../framework/configs/main.wdio.conf.js";
import { assert } from 'chai';

When(/^I click the Download button to download the file$/, async () => {
    await downloadArticlePage.downloadPDF();
});

const fileHelper = new File();

Then(/^I should see "(.+)" in the downloads folder$/, async (file) => {
    const downloadFilePath = `${downloadDir}/${file}`;
    const fileExists = await fileHelper.isFileExist(downloadFilePath);
    assert.isTrue(fileExists, `File ${file} does not exist in the downloads folder`);
});