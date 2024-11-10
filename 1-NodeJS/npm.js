// npm - global command, comes with code
// npm --version

// local dependency - use it only in this particular project(used more)
// npm i <packageName> {command}

// global dependency - use it in any project 
// npm install -g <packageName> {command}
// sudo npm install -g <packageName> {mac command}

// package.json - manifest file (stores important info about our project/package) and we create this json with the following three approaches 

// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)
// all the installed dependencies are stored in node_modules

const _ = require('lodash');
// install the dependencies first then access it
const items = [1, [2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);

console.log("Hello Saukhin, Welcome!")






