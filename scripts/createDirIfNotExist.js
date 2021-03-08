const fs = require('fs');

const createDirIfNotExist = (dir) => {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, {}, (e) => {
        if (e) {
          reject({ message: 'Error accessing target directory' });
        }
      });
    }
    resolve(true);
  });
};

module.exports = createDirIfNotExist;
