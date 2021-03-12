import _ from 'lodash';

const getFormattedStylishDiff = (diff) => {
  const inner = (diffInner, depth) => {
    const indents = '  ';
    const indentsDouble = indents.repeat(2);
    const getOffset = (depthParam, intendParam = indentsDouble) => intendParam.repeat(depthParam);
    const offset = getOffset(depth);

    const diffSorted = _.cloneDeep(diffInner.sort((a, b) => (a.name > b.name) - 0.5));

    const getObjAsString = (obj, depthInner = depth + 1) => {
      let str = '{\n';
      str += Object.entries(obj)
        .reduce((acc, [key, value]) => {
          if (_.isObject(value)) {
            return acc.concat(`${getOffset(depthInner)}${indents}${indents}${key}: ${getObjAsString(value, depthInner + 1)}`);
          }
          return acc.concat(`${getOffset(depthInner)}${indents}${indents}${key}: ${value}\n`);
        }, '');

      str += `${getOffset(depthInner - 1)}${indents}${indents}}`;
      if (`${depthInner}` > depth + 1) {
        str += '\n';
      }

      return str;
    };
    const getValue = (value) => {
      if (_.isObject(value)) {
        return getObjAsString(value);
      }
      return value;
    };
    const formatResult = (str) => {
      let res = `{\n${str}${offset}}`;
      if (depth > 0) {
        res += '\n';
      }

      return res;
    };

    const res = diffSorted.reduce((acc, { name, meta, children }) => {
      if (children !== undefined) {
        return acc.concat(`${offset}${indents}${indents}${name}: ${inner(children, depth + 1)}`);
      }
      if (_.isEqual(meta.firtstElValue, meta.secondElValue)) {
        return acc.concat(`${offset}${indents}${indents}${name}: ${getValue(meta.firtstElValue)}\n`);
      }
      if (!_.has(meta, 'firtstElValue')) {
        return acc.concat(`${offset}${indents}+ ${name}: ${getValue(meta.secondElValue)}\n`);
      }
      if (!_.has(meta, 'secondElValue')) {
        return acc.concat(`${offset}${indents}- ${name}: ${getValue(meta.firtstElValue)}\n`);
      }

      return acc.concat(`${offset}${indents}- ${name}: `, `${getValue(meta.firtstElValue)}\n`,
        `${offset}${indents}+ ${name}: `, `${getValue(meta.secondElValue)}\n`);
    }, '');

    // res = `{\n${res}${offset}}`;
    // if (depth > 0) {
    //   res += '\n';
    // }

    // return res;
    return formatResult(res);
  };
  return inner(diff, 0);
};

export default getFormattedStylishDiff;
