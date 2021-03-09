const downloader = require('./scripts/downloader');
const extractor = require('./scripts/extractor');
const xmlToJson = require('./scripts/xmlToJson');
const createDirIfNotExist = require('./scripts/createDirIfNotExist');
const fs = require('fs');
const dataRepository = 'https://github.com/BSData/wh40k-killteam/archive/master.zip';
const downloadTarget = './battlescribe/master.zip';
const xmlDir = './battlescribe/xml';
const jsonDir = './battlescribe/json';

const app = async () => {
  try {
    await downloadBattlescribeData();
    const xmlFiles = await extractor(downloadTarget, xmlDir);
    const result = await generateJsonData(xmlFiles);
    onSuccess(result);
  } catch (e) {
    onFail(e.message, 5);
  }
};

const downloadBattlescribeData = async () => {
  console.log(`Downloading: ${dataRepository}`);
  await downloader(dataRepository, downloadTarget);
};

const generateJsonData = (srcFiles) => {
  return new Promise(async (resolve, reject) => {
    const errors = [];
    const success = [];

    try {
      await createDirIfNotExist(jsonDir);
    } catch (e) {
      reject(new Error(`Unable to create directory at ${jsonDir}`));
    }

    srcFiles.forEach((fName) => {
      try {
        const xmlData = fs.readFileSync(`${xmlDir}/${fName}`, 'utf-8');
        const jsonData = JSON.stringify(xmlToJson(xmlData));
        fs.writeFileSync(`${jsonDir}/${fName.replace('.cat', '.json')}`, jsonData);
        success.push(fName);
      } catch (e) {
        errors.push(fName);
      }
    });

    resolve({ success, errors });
  });
};

const onSuccess = (result) => {
  console.log(`Saved ${result.success.length} JSON data files to ${jsonDir}`);

  if (result.errors.length > 0) {
    console.log(`\nErrors converting ${result.errors.length} xml data files to JSON:`);
    console.log(`\t- ${result.errors('\n\t- ')}`);
  }

  console.log('\n\n-------------\nAll Done!\n--------------\n\n');
  process.exit(0);
};

const onFail = (message, exitCode = 5) => {
  console.log('\n---- FAILED ----');
  console.log('\n', message);
  process.exit();
};

app();
