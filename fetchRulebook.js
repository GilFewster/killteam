const downloader = require('./scripts/downloader');
const extractor = require('./scripts/extractor');

const dataRepository = 'https://github.com/BSData/wh40k-killteam/archive/master.zip';
const downloadTarget = './battlescribe/master.zip';
const xmlDir = './battlescribe/factions';
const jsonDir = './battlescribe/json';

const app = async () => {
  try {
    // await downloadBattlescribeData();
    const xmlFiles = await extractBattlescribeData();
    console.log(xmlFiles);
    // generateJsonData(xmlFiles);
    onSuccess();
  } catch (e) {
    onFail(e.message, 5);
  }
};

const downloadBattlescribeData = async () => {
  console.log(`Downloading: ${dataRepository}`);
  await downloader(dataRepository, downloadTarget);
};

const extractBattlescribeData = async () => {
  console.log(`\nExtracting .cat files to ${xmlDir}\n`);
  await extractor(downloadTarget, xmlDir);
};

const generateJsonData = (srcFiles) => {
  console.log(srcFiles);
};

const onSuccess = () => {
  console.log('\n\n-------------\nAll Done!\n--------------\n\n');
  process.exit(0);
};

const onFail = (message, exitCode = 5) => {
  console.log(message);
  process.exit(exitCode);
};

app();
