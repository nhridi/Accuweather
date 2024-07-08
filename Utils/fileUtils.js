import fs from 'fs';
import { downloadDir } from './environment/directories.js';

const ensureDownloadDirectoryExists = async () => {
  try {
        return await fs.promises.mkdir(downloadDir, { recursive: true });
    } catch (error) {
        console.error(`Failed to ensure that the download directory exists: ${error}`);
        throw error;
    }
};

const checkFileExists = (filePath, timeout = 10000) => {
    return new Promise((resolve) => {
        const start = Date.now();
        const checkInterval = setInterval(async () => {
            try {
                await fs.promises.access(filePath, fs.constants.F_OK);
                clearInterval(checkInterval);
                resolve(true);
            } catch (err) {
                if (Date.now() - start > timeout) {
                    clearInterval(checkInterval);
                    resolve(false);
                }
            }
        }, 200);
    });
};

export { ensureDownloadDirectoryExists, checkFileExists };