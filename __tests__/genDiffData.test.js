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
const right1 = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;
const filePathRecurs1 = getFixturePath('fileRecurs1.json');
const filePathRecurs2 = getFixturePath('fileRecurs2.json');
const right3 = `{
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
const right2 = '{\n}';
// const filePath5 = getFixturePath('fileNoObject.json');

describe('Json', () => {
  test('genDiffData', () => {
    expect(diff.getDiff(filePath1, filePath2)).toEqual(right1);
    expect(diff.getDiff(filePathRecurs1, filePathRecurs2)).toEqual(right3);
    expect(diff.getDiff(filePath3, filePath4)).toEqual(right2);
  });
});

const filePath5 = getFixturePath('file1.yml');
const filePath6 = getFixturePath('file2.yml');
const filePath7 = getFixturePath('fileRecurs1.yml');
const filePath8 = getFixturePath('fileRecurs2.yml');
describe('Yml', () => {
  test('genDiffData', () => {
    expect(diff.getDiff(filePath5, filePath6)).toEqual(right1);
    expect(diff.getDiff(filePath7, filePath8)).toEqual(right3);
    // expect(path.extname(filePath5)).toEqual(path.extname(filePath6));
    // expect(initDiff(filePath3, filePath4)).toEqual(right2);
  });
});
