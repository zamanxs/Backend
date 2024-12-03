const express = require('express');
const path = require('path');

const app = express();

//setup static and middleware
app.use(express.static('./public')) // with express.static we are using all the files inside the public folder

// app.get('/', (req,res)=>{
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// adding to static assets 
// SSR -> Service Side Rendering
// });



app.all('*',(req, res)=>{
    res.status(404).send('Resource not found')
});

app.listen(5000, () =>{
    console.log('Server is listening on port 5000....');
    
});
