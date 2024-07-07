import fs from 'fs';
import { downloadDir } from './environment/directories.js';

const ensureDownloadDirectoryExists = () => {
  return fs.promises.mkdir(downloadDir, { recursive: true })
    .catch(error => {
      console.error(`Failed to ensure that the download directory exists: ${error}`);
      throw error;
    });
};

export { ensureDownloadDirectoryExists };