const xmlToJson = require('./scripts/xmlToJson');
const fs = require('fs');

// fs.readFile('./battlescribe/factions/AstraMilitarum.cat', (err, data) => {
//   if (err) {
//     console.log('error');
//     console.log(err);
//   } else {
//     console.log('done');
//     console.log(data);
//   }
//   console.log('HI');
// });

const data = [];
const readStream = fs.createReadStream('./battlescribe/factions/AstraMilitarum.cat', {
  highWaterMark: 16,
});

readStream.on('data', (chunk) => {
  data.push(chunk);
  // console.log('data :', chunk, chunk.length);
});

readStream.on('end', () => {
  const xmlString = Buffer.concat(data).toString();
  const jsonObj = xmlToJson(xmlString);
  console.log(jsonObj);
});

readStream.on('error', (err) => {
  console.log('error :', err);
});
