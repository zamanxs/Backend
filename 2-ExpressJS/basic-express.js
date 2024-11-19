const express = require('express');
const app = express()

app.get('/', (req, res) =>{
    console.log('User hit the resource')
    res.status(200).send('Home Page');
});

app.get('/about',(req, res) =>{
    res.status(200).send(('About Page'))
});

app.all('*',(req, res) => {
    res.status(404).send('<h1>Resource not found</h1>')
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
});

// app.get --> Read Data
// app.post --> Insert Data
// app.put --> Update Data
// app.delete --> Delete Data 
// app.all
// app.use
// app.listen