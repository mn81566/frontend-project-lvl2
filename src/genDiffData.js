import Diff from './diff.js';

const initDiff = (filepath1, filepath2) => {
	const diff = new Diff(filepath1, filepath2);
	// return diff.getDiff();
	return diff.getDiffAsString();
};

export default initDiff;
