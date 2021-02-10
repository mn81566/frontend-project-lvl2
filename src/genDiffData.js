import fs from 'fs';
import _ from 'lodash';
import path from 'path';

const compare = (obj1, obj2) => {
  const entries1 = Object.entries(obj1);
  const entries2 = Object.entries(obj2);

  const unionRes = _.union(entries1, entries2);
  const uniqRes = _.uniqWith(unionRes, _.isEqual);
  return _.sortBy(uniqRes, [(o) => o[0]]);
};

const formattedCompareRes = (obj1, obj2, compareRes) => {
  const res = compareRes.map(([key, value]) => {
    if (obj1[key] === value && obj2[key] !== value) {
      const newKey = `- ${key}`;
      return [newKey, value];
    }
    if (obj1[key] !== value && obj2[key] === value) {
      const newKey = `+ ${key}`;
      return [newKey, value];
    }
    // if (obj1[key] === value && obj2[key] === value) {
    const newKey = `  ${key}`;
    return [newKey, value];
    // }
  });
  return res;
};

const compareToString = (compareRes) => {
  let res = '';
  compareRes.forEach(([key, value]) => {
    res += `  ${key}: ${value}\n`;
  });
  return `{\n${res}}`;
};

const initDiff = (filepath1, filepath2) => {
  const filepathResolved1 = path.resolve(process.cwd(), filepath1);
  const filepathResolved2 = path.resolve(process.cwd(), filepath2);

  const dataFile1 = JSON.parse(fs.readFileSync(filepathResolved1, 'utf-8'));
  const dataFile2 = JSON.parse(fs.readFileSync(filepathResolved2, 'utf-8'));

  const compareRes = compare(dataFile1, dataFile2);
  const compareResFormatted = formattedCompareRes(dataFile1, dataFile2, compareRes);

  return compareToString(compareResFormatted);
};

export default initDiff;
