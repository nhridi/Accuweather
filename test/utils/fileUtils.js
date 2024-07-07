import fs from 'fs';
import path from 'path';

const checkFileExists = async (filePath, timeout = 10000) => {
    const start = Date.now();
    while (Date.now() - start < timeout) {
        if (fs.existsSync(filePath)) {
            return true;
        }
        await new Promise(resolve => setTimeout(resolve, 200));
    }
    return false;
};

export { checkFileExists };