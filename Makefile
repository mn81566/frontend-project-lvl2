install: 
	npm install
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
make test-coverage:
	npm test -- --coverage --coverageProvider=v8