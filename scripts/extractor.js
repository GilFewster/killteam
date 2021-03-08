const createDirIfNotExist = require('./createDirIfNotExist');
const path = require('path');
const AdmZip = require('adm-zip');

const extractor = (from, to) => {
  const zip = new AdmZip(from);
  const extractTypes = ['.cat'];

  createDirIfNotExist(to).then(() => {
    const extracted = [];
    zip.getEntries().map((entry) => {
      const fileName = path.basename(entry.entryName);
      const fileType = path.extname(fileName);
      const safeName = fileName.replace(/[\s,\']/g, '');

      if (extractTypes.includes(fileType)) {
        zip.extractEntryTo(entry, to, false, true, safeName);
        extracted.push(safeName);
        console.log(`>> Extracted: ${safeName}`);
      }
    });

    console.log('EXTRACZTED');
    return 'Hello';
  });

  // return new Promise(async (resolve, reject) => {
  //   try {
  //     await createDirIfNotExist(to);

  //     resolve('HELLO THERE');
  //   } catch (e) {
  //     reject(e);
  //   }
  // });
};

// const extractor = (from, to) => {
//   const zip = new AdmZip(from);
//   const extractTypes = ['.cat'];

//   return new Promise(async (resolve, reject) => {
//     const extracted = [];
//     try {
//       await createDirIfNotExist(to);

//       zip.getEntries().map((entry) => {
//         const fileName = path.basename(entry.entryName);
//         const fileType = path.extname(fileName);
//         const safeName = fileName.replace(/[\s,\']/g, '');

//         if (extractTypes.includes(fileType)) {
//           zip.extractEntryTo(entry, to, false, true, safeName);
//           extracted.push(safeName);
//           console.log(`>> Extracted: ${safeName}`);
//         }
//       });
//       resolve('HELLO THERE');
//     } catch (e) {
//       reject(e);
//     }
//   });
// };

module.exports = extractor;
