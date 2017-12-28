const { readFileSync, writeFileSync, createReadStream, createWriteStream } = require('fs');

const currentPackage = JSON.parse(readFileSync('package.json'));
const HTMLLSPackage = JSON.parse(readFileSync('vscode-html-languageserver/package.json'));

writeFileSync('dist/package.json', JSON.stringify(Object.assign(HTMLLSPackage, currentPackage, { scripts: {} }), null, 2));
createReadStream('README.md').pipe(createWriteStream('dist/README.md'));
createReadStream('LICENSE').pipe(createWriteStream('dist/LICENSE'));
