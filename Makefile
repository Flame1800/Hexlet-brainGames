install:
	npm install
start:
	npm run babel-node -- src/bin/brain-games.js 
start-even: 
	npm run babel-node -- src/bin/brain-even.js 
start-calc: 
	npm run babel-node -- src/bin/brain-calc.js 
start-cgd: 
	npm run babel-node -- src/bin/brain-cgd.js 
start-balance: 
	npm run babel-node -- src/bin/brain-balance.js 
publish: 
	npm publish
lint: 
	npm run eslint