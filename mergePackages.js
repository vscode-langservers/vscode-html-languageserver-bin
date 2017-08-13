const { readFileSync, writeFileSync } = require('fs');

const currentPackage = JSON.parse(readFileSync('package.json'));
const HTMLLSPackage = JSON.parse(readFileSync('vscode-html-languageserver/package.json'));

writeFileSync('dist/package.json', JSON.stringify(Object.assign(HTMLLSPackage, currentPackage, {
	scripts: {},
	dependencies: Object.assign({}, HTMLLSPackage.dependencies, currentPackage.devDependencies)
}), null, 2));
