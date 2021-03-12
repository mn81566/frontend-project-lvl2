import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

export const jsonParse = (obj) => JSON.parse(obj);

// export const yamlParse = (obj) => {
//   const res = yaml.load(obj);
//   return
// };
export const yamlParse = (obj) => yaml.load(obj);
// export const yamlParse = (obj) => yaml.load(obj)
//   .reduce((acc, item) => {
//     // if (_.isObject(item)) {
//     //   return yamlParse(item);
//     // }
//     Object.assign(acc, item);
//     return acc;
//   }, {});

export const parseFile = (filePath) => {
  const extension = path.extname(filePath);
  let dataFile = '';

  switch (extension) {
    case '.json':
      dataFile = jsonParse(fs.readFileSync(filePath, 'utf-8'));
      break;
    case '.yml':
      dataFile = yamlParse(fs.readFileSync(filePath, 'utf-8'));
      break;
    default:
      throw new Error('Не известный формат');
  }
  return dataFile;
};

// export default jsonParse;
