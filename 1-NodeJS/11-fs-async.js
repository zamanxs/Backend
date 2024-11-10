const { readFile, writeFile } = require('fs')
console.log('start');


readFile('./content/first.txt', 'utf8', (err, result)=>{  // we are gonna get a buffer unless we are gonna provide the utf8(encoding value) coding
    if (err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8',(err, result)=>{
       if (err){
        console.log(err)
        return
       } 
       const second = result
       writeFile('./content/result-async.txt',
        `Here is the result : ${first}, ${second}`
       ,(err, result)=>{
        if (err){
            console.log(err)
            return;
        }
        console.log('done with this task');
       })
    }) 
})
console.log('starting next task'); // this will print first because of the async approach as in async the tasks that takes less time are prioritized



