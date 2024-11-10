// Global variables are variable which we can access from anywhere in the code

// __dirname = path to directory
// __filename = file name 
// require = function to use modules (CommonJS)
// module = info about current module (file)
// process = info abour env where the program is being executed

console.log(__dirname);
setInterval(() => {
    console.log('hello world');
    
}, 1000); // basically this function will continue running with the given interval in miliseconds

