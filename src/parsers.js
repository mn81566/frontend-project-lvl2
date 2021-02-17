import yaml from 'js-yaml';

export const jsonParse = (obj) => JSON.parse(obj);
export const yamlParse = (obj) => yaml.load(obj)
  .reduce((acc, item) => {
    Object.assign(acc, item);
    return acc;
  }, {});

// export default jsonParse;
