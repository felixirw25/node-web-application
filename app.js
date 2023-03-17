const express = require('express');
const app = express();
const Joi = require('@hapi/joi');

app.use(express.json());


// app.get('/mca', (req,res) => {
    
    // })
    
app.get('/', function(req, res, next){ 
    if(req.headers.host == 'mca.herokufi.online'){
        req.url = '/'; 
        res.send('Hello World MCA - Node.js');
        next(); 
    }
    else{
        res.send('Hello World - Node.js');
    }
});

app.get('/', function(){ 
    res.send('Hello World MCA - Node.js');
});
    
app.get('/welcome', (req,res) => {
    res.send('Hello World - Node.js');
})
    const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));