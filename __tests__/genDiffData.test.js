import { test, expect, describe } from '@jest/globals';
import { fileURLToPath } from 'url';
import path from 'path';
// import initDiff from '../src/genDiffData.js';
import * as diff from '../src/diff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const filePath1 = getFixturePath('file1.json');
const filePath2 = getFixturePath('file2.json');
const rightStylishFlat = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;
const filePathRecurs1 = getFixturePath('fileRecurs1.json');
const filePathRecurs2 = getFixturePath('fileRecurs2.json');
const rightStylishRecursive = `{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`;
const filePath3 = getFixturePath('fileEmpty1.json');
const filePath4 = getFixturePath('fileEmpty2.json');
const rightStylishEmpty = '{\n}';
// const filePath5 = getFixturePath('fileNoObject.json');

const rightPlainRecursive = `Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]`;

describe('Json', () => {
  test('stylish', () => {
    expect(diff.getDiff(filePath1, filePath2)).toEqual(rightStylishFlat);
    expect(diff.getDiff(filePathRecurs1, filePathRecurs2)).toEqual(rightStylishRecursive);
    expect(diff.getDiff(filePath3, filePath4)).toEqual(rightStylishEmpty);
  });
  test('plain', () => {
    expect(diff.getDiff(filePathRecurs1, filePathRecurs2, { format: 'plain' })).toEqual(rightPlainRecursive);
  });
});

const filePath5 = getFixturePath('file1.yml');
const filePath6 = getFixturePath('file2.yml');
const filePath7 = getFixturePath('fileRecurs1.yml');
const filePath8 = getFixturePath('fileRecurs2.yml');
describe('Stylish yml', () => {
  test('genDiffData', () => {
    expect(diff.getDiff(filePath5, filePath6)).toEqual(rightStylishFlat);
    expect(diff.getDiff(filePath7, filePath8)).toEqual(rightStylishRecursive);
    // expect(path.extname(filePath5)).toEqual(path.extname(filePath6));
    // expect(initDiff(filePath3, filePath4)).toEqual(right2);
  });
});
