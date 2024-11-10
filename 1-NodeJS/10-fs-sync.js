const { readFileSync, writeFileSync } = require('fs')
console.log('start');

//read from a file 

const first = readFileSync('./content/first.txt', 'utf8')

const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);

// create new file 

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`
)
console.log('done with the tast');
console.log('starting the next one');





