const parser = require('fast-xml-parser');
const defaultOptions = {};

const xmlToJson = (xml, options = defaultOptions) => {
  return parser.parse(xml, options);
};

module.exports = xmlToJson;
