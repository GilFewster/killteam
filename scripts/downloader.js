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
      let message;

      switch (e.code) {
        case 'ENOTFOUND':
          message = `ERROR: Unable to reach requested URI.\n -> Check your internet connection.`;
          break;
        default:
          message = `Unable to download ${url}`;
      }

      reject(new Error(message));
    }
  });
};

module.exports = downloader;
