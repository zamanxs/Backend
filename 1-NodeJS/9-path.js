
const { log } = require('console');
const path = require('path');
console.log(path.sep)


const filepath = path.join('/content','subfolder','test.txt')

console.log(filepath);

// to access only the last folder or file of the path 
const base = path.basename(filepath)
console.log(base);

// access the absolute path

const absolute = path.resolve(__dirname, 'content', 'subfolder','text.txt') // return an obsolute path
console.log(absolute)

