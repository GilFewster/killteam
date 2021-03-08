const createDirIfNotExist = require('./createDirIfNotExist');

const stream = require('stream');
const { promisify } = require('util');
const path = require('path');
const fs = require('fs');
const got = require('got');

const downloader = (url, destination) => {
  return new Promise(async (resolve, reject) => {
    const pipeline = promisify(stream.pipeline);

    try {
      const ready = await createDirIfNotExist(path.dirname(destination));
      await pipeline(got.stream(url), fs.createWriteStream(destination));
      resolve();
    } catch (e) {
      reject(e.message);
    }
  });
};

// const prepareTargetDir = (dir) => {
//   return new Promise((resolve, reject) => {
//     if (!fs.existsSync(dir)) {
//       fs.mkdirSync(dir, {}, (e) => {
//         if (e) {
//           reject({ message: 'Error accessing target directory' });
//         }
//       });
//     }
//     resolve(true);
//   });
// };

module.exports = downloader;
