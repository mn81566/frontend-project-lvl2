import _ from 'lodash';
import path from 'path';
import fs from 'fs';
// import yaml from 'js-yaml';
import * as parser from './parsers.js';
// import * as utils from './utils.js';
import formatDiff from '../formatters/index.js';

export const resolvePath = (filePath) => path.resolve(process.cwd(), filePath);

export const compare = (firtstEl, secondEl) => _.union(_.keys(firtstEl), _.keys(secondEl));

const createKeysDescription = (firtstEl, secondEl) => {
  const keys = compare(firtstEl, secondEl);

  return keys.reduce((acc, key) => {
    acc.push(
      {
        name: key,
        meta: {},
      },
    );

    const type1 = Object.prototype.toString.call(firtstEl[key]);
    const type2 = Object.prototype.toString.call(secondEl[key]);

    if (type1 === '[object Object]'
    && type2 === '[object Object]') {
      acc.filter((el) => el.name === key)
        .map((el) => el.children = createKeysDescription(firtstEl[key], secondEl[key]));
      return acc;
    }
    if (_.has(firtstEl, key)) {
      acc.filter((el) => el.name === key)
        .map((el) => el.meta['firtstElValue'] = firtstEl[key]);
    }
    if (_.has(secondEl, key)) {
      acc.filter((el) => el.name === key)
        .map((el) => el.meta['secondElValue'] = secondEl[key]);
    }
    return acc;
  }, []);
};

export const getDiff = (filePath1, filePath2, options = { format: 'stylish' }) => {
  const filePathResolved1 = resolvePath(filePath1);
  const filePathResolved2 = resolvePath(filePath2);

  if ((fs.existsSync(filePathResolved1) && fs.existsSync(filePathResolved2)) === false) {
    throw new Error('Не найден файл');
  }

  const dataFile1 = parser.parseFile(filePathResolved1);
  const dataFile2 = parser.parseFile(filePathResolved2);

  const compareRes = createKeysDescription(dataFile1, dataFile2);
  const formattedRes = formatDiff(compareRes, options.format);

  return formattedRes;
  // return compareRes;
};
