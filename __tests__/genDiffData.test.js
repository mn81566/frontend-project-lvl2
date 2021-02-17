import { test, expect, describe } from '@jest/globals';
import { fileURLToPath } from 'url';
import path from 'path';
import initDiff from '../src/genDiffData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const filePath1 = getFixturePath('file1.json');
const filePath2 = getFixturePath('file2.json');
const right1 = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;
const filePath3 = getFixturePath('fileEmpty1.json');
const filePath4 = getFixturePath('fileEmpty2.json');
const right2 = '{\n}';
// const filePath5 = getFixturePath('fileNoObject.json');

describe('Json', () => {
  test('genDiffData', () => {
    expect(initDiff(filePath1, filePath2)).toEqual(right1);
    expect(initDiff(filePath3, filePath4)).toEqual(right2);
  });
});

const filePath5 = getFixturePath('file1.yml');
const filePath6 = getFixturePath('file2.yml');
describe('Yml', () => {
  test('genDiffData', () => {
		expect(initDiff(filePath5, filePath6)).toEqual(right1);
    // expect(path.extname(filePath5)).toEqual(path.extname(filePath6));
		// expect(initDiff(filePath3, filePath4)).toEqual(right2);
  });
});
