import _ from 'lodash';
import path from 'path';
import fs from 'fs';
// import yaml from 'js-yaml';
import * as parser from './parsers.js';
import * as utils from './utils.js';

class Diff {
  constructor(filepath1, filepath2) {
    this.filepath1 = path.resolve(process.cwd(), filepath1);
    this.filepath2 = path.resolve(process.cwd(), filepath2);

    if ((fs.existsSync(this.filepath1) && fs.existsSync(this.filepath2)) === false) {
      throw new Error('Не найден файл');
    }
    if (path.extname(this.filepath1) !== path.extname(this.filepath2)) {
      throw new Error('Сравниваются файлы разных форматов');
		}
		
		this.diff = this.getDiff();
  }

  getDiffAsString() {
    let res = '';
    this.diff.forEach(([key, value]) => {
      res += `  ${key}: ${value}\n`;
    });
    return `{\n${res}}`;
  }
	
  getDiff() {
    const extension = path.extname(this.filepath1);
    let dataFile1 = '';
    let dataFile2 = '';

    switch (extension) {
      case '.json':
        dataFile1 = parser.jsonParse(fs.readFileSync(this.filepath1, 'utf-8'));
        dataFile2 = parser.jsonParse(fs.readFileSync(this.filepath2, 'utf-8'));
        break;
      case '.yml':
        dataFile1 = parser.yamlParse(fs.readFileSync(this.filepath1, 'utf-8'));
        dataFile2 = parser.yamlParse(fs.readFileSync(this.filepath2, 'utf-8'));
        break;
		  default:
        throw new Error('Не известный формат');
    }

    const compareRes = utils.compare(dataFile1, dataFile2);
    const compareResFormatted = utils.formatCompareRes(dataFile1, dataFile2, compareRes);

		// return this.toString(compareResFormatted);
		return compareResFormatted;
  }
}

export default Diff;
