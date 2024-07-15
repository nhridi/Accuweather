import { When, Then } from "@wdio/cucumber-framework";
import downloadArticlePage from '../pageobjects/downloadArticlePage.js';
import path from 'path';
import fs from 'fs';
import { downloadDir } from "../../framework/configs/main.wdio.conf.js";
import { assert } from 'chai';

When(/^I click the Download button to download the file$/, async () => {
    await downloadArticlePage.downloadPDF();
});

Then(/^I should see "(.+)" in the downloads folder$/, async (file) => {
    const downloadFilePath = path.join(downloadDir, file);
    const fileExists = await fs.pathExists(downloadFilePath);
    assert.isTrue(fileExists, `File ${file} does not exist in the downloads folder`);
});