import path from 'path';
import _ from 'lodash';

export const resolvePath = (filepath) => path.resolve(process.cwd(), filepath);

// const isObject = (el) => _.isObject(el) && !_.isArray(el);

// const getObjAsArr = (obj) => {
//   const entries1 = Object.entries(obj);
//   const res = entries1.map(([key, value]) => {
//     if (isObject(value)) {
//       return [key, getObjAsArr(value)];
//     }
//     return [key, value];
//   });
//   return res;
// };

// OLD
// export const compare = (firtstEl, secondEl) => {
//   const entries1 = Object.entries(firtstEl);
//   const entries2 = Object.entries(secondEl);

//   const unionRes = _.union(entries1, entries2);
//   const uniqRes = _.uniqWith(unionRes, _.isEqual);
//   return _.sortBy(uniqRes, [(o) => o[0]]);
// };
// export const compare = (firtstEl, secondEl) => {
//   const entries1 = Object.entries(firtstEl);
//   const entries2 = Object.entries(secondEl);

//   const res = entries1.reduce((acc, [key, value]) => {
//     if (_.has(secondEl, key)) {
//       if (_.isObject(value)
//       && _.isObject(secondEl[key])
//       && !_.isArray(value)
//       && !_.isArray(secondEl[key])) {
//         return compare(value, secondEl[key]);
//       }
//     }
//     // acc.push([key, value]);
//     // acc.push([key, secondEl[key]]);

//     return acc;
//   }, []);

//   return res;
// };
// export const compare = (firtstEl, secondEl) => {
//   const entries1 = getObjAsArr(firtstEl);
//   const entries2 = getObjAsArr(secondEl);

//   const createDiff = (arr1, arr2) => {
//     const res = arr2.reduce((acc, [key, value]) => {
//       if (arr1.includes(arr2[30])) {
//         console.log("WWWWWWWWWWWWWWWWWWWWWWW");
//         return;
//       }
//       if (_.isArray(arr1[key])) {
//         return createDiff(arr1[key], value);
//       }
//       acc.push([key, value]);
//       return acc;
//     }, entries1);
//     return res;
//   };
//   const res = createDiff(entries1, entries2);

//   return res;
// };

// export const formatCompareRes = (obj1, obj2, compareRes) => {
//   const res = compareRes.map(([key, value]) => {
//     // if (obj1[key] === value && obj2[key] !== value) {
//     if (_.isEqual(obj1[key], value) && !_.isEqual(obj2[key], value)) {
//       const newKey = `- ${key}`;
//       return [newKey, value];
//     }
//     if (!_.isEqual(obj1[key], value) && _.isEqual(obj2[key], value)) {
//       const newKey = `+ ${key}`;
//       return [newKey, value];
//     }
//     // if (obj1[key] === value && obj2[key] === value) {
//     const newKey = `  ${key}`;
//     return [newKey, value];
//     //  }
//   });
//   return res;
// };

// export default resolvePath;
