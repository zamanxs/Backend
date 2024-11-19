
const http = require('http');
const {readFileSync} = require('fs');

// get all files 
const homePage = readFileSync('./navbar-app/index.html')
const homestyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic= readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res)=>{
    // console.log(req.method)
    const url = req.url;
    if( url === '/'){
        // home page setup 
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(homePage);
// even if we use require and fetch the html file here, we will not be passing in the file but only the contents of the file
        res.end();
    }
    else if( url === '/styles.css'){
        // about page 
        res.writeHead(200, {'content-type': 'text/css'});
        res.write(homestyles);
        res.end();
        
    }
    //image/logo
    else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml'});
        res.write(homeImage);
        res.end();
    }

    //logic
    else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.write(homeLogic);
        res.end();
    }
    else{ //404
        res.writeHead(404, {'content-type':'text/html'});
        res.write('<h1>404 not found</h1>');
        res.end();
    } 
})

server.listen(5000);


