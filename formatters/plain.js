import _ from 'lodash';

const getFormattedPlainDiff = (diff) => {
  const inner = (diffInner, pathToValue) => {
    const diffSorted = _.cloneDeep(diffInner.sort((a, b) => (a.name > b.name) - 0.5));

    const getValue = (value) => {
      if (_.isObject(value)) {
        return '[complex value]';
      }
      if (typeof value === 'string') {
        return `'${value}'`;
      }
      return value;
    };

    const res = diffSorted.reduce((acc, { name, meta, children }) => {
      const parent = pathToValue.concat(name);

      if (children !== undefined) {
        return acc.concat(`${inner(children, `${parent}.`)}`);
      }
      if (_.isEqual(meta.firtstElValue, meta.secondElValue)) {
        return acc.concat('');
      }
      if (!_.has(meta, 'firtstElValue')) {
        return acc.concat(`Property '${parent}' was added with value: ${getValue(meta.secondElValue)}\n`);
      }
      if (!_.has(meta, 'secondElValue')) {
        return acc.concat(`Property '${parent}' was removed\n`);
      }

      return acc.concat(`Property '${parent}' was updated. From ${getValue(meta.firtstElValue)} to ${getValue(meta.secondElValue)}\n`);
    }, '');

    // res = `{\n${res}${offset}}`;
    // if (depth > 0) {
    //   res += '\n';
    // }

    return res;
  };
  const res = inner(diff, '');

  // Здесь убираю последний перенос строки
  return res.slice(0, -1);
};

export default getFormattedPlainDiff;
