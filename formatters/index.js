import _ from 'lodash';
import getFormattedStylishDiff from './stylish.js';
import getFormattedPlainDiff from './plain.js';
import getFormattedJsonDiff from './json.js';

const formaters = {
  stylish: getFormattedStylishDiff,
  plain: getFormattedPlainDiff,
  json: getFormattedJsonDiff,
};

const formatDiff = (diff, formatterName) => {
  if (_.has(formaters, formatterName)) {
    return formaters[formatterName](diff);
  }

  throw new Error('Не найден форматтер');
};

export default formatDiff;
