const createDirIfNotExist = require('./createDirIfNotExist');
const path = require('path');
const AdmZip = require('adm-zip');

const extractor = (from, to) => {
  return new Promise(async (resolve, reject) => {
    try {
      const zip = new AdmZip(from);
      const extractTypes = ['.cat'];
      const extracted = [];

      await createDirIfNotExist(to);
      zip.getEntries().map((entry) => {
        const fileName = path.basename(entry.entryName);
        const fileType = path.extname(fileName);

        if (!fileName || !fileType) return;

        const safeName = fileName.replace(/[\s,\']/g, '');

        if (extractTypes.includes(fileType)) {
          zip.extractEntryTo(entry, to, false, true, safeName);
          extracted.push(safeName);
        }
      });

      console.log(`Extracted ${extracted.length} files to ${to}`);
      resolve(extracted);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = extractor;
