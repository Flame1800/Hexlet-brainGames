install:
	npm install
start-even: 
	npm run babel-node -- src/bin/brain-even.js 
publish: 
	npm publish
lint: 
	npm run eslint