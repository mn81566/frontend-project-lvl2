import path from 'path';
import _ from 'lodash';

export const resolvePath = (filepath) => path.resolve(process.cwd(), filepath);

export const compare = (firtstEl, secondEl) => {
	const entries1 = Object.entries(firtstEl);
	const entries2 = Object.entries(secondEl);

	const unionRes = _.union(entries1, entries2);
	const uniqRes = _.uniqWith(unionRes, _.isEqual);
	return _.sortBy(uniqRes, [(o) => o[0]]);
}

export const formatCompareRes = (obj1, obj2, compareRes) => {
	const res = compareRes.map(([key, value]) => {
		if (obj1[key] === value && obj2[key] !== value) {
			const newKey = `- ${key}`;
			return [newKey, value];
		}
		if (obj1[key] !== value && obj2[key] === value) {
			const newKey = `+ ${key}`;
			return [newKey, value];
		}
		// if (obj1[key] === value && obj2[key] === value) {
		const newKey = `  ${key}`;
		return [newKey, value];
		//  }
	});
	return res;
}

// export default resolvePath;
