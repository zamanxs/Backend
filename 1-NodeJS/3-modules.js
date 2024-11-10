// Modules
// CommonJS, every file is module (by default) in nodejs
// encapsulated code (only share what we want)


// here we weill try to access the names from the other file 
const names = require('./4-names') // to access the varaibles from another file
const sayHi = require('./5-utils') // accessing the function

require('./7-mindgrenade') //if the funtioned is called inside that module then it will also run here as we can see

console.log(names); // here the object will be printed
console.log(sayHi);

const data = require('./6-alternativeway')



// sayHi('Zamanxs')
// sayHi(names.rafi) // we are accessing the name rafi from the object names
// sayHi(names.zaman)


