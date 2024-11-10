// http module basics

const http = require('http');

const server = http.createServer((req, res)=>{ // request and respond params
    if(req.url === '/'){ //requesting for the home page
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){ // requesting for the about page
        res.end('Here is our short history')
    }
    res.end( // for other pages which don't exist in our website
        `<h1>Ooops!</h1>
        <p>We can't seem to find the page that you are looking for</p>
        <a href= "/">back home</a>`
    )
});

server.listen(5000);

