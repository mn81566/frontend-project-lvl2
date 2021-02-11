import { test, expect } from '@jest/globals';
import path from 'path';
import initDiff from '../src/genDiffData.js';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const filePath1 = getFixturePath('filepath1.json');
const filePath2 = getFixturePath('filepath2.json');
const str = `{
    - follow: false
      host: hexlet.io
    - proxy: 123.234.53.22
    - timeout: 50
    + timeout: 20
    + verbose: true
}`;

test('genDiffData', () => {
//   const readFile = (filename) => fs.readFile(getFixturePath(filename), 'utf-8');
  expect(initDiff(filePath1, filePath2)).toEqual(str);
});
