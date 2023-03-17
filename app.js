const express = require('express');
const app = express();
const Joi = require('@hapi/joi');

app.use(express.json());

app.get('/', (req,res) => {
    res.send('Hello World - Node.js');
})

// app.get('/mca', (req,res) => {
    
// })

app.get('*', function(req, res, next){ 
    if(req.headers.host == 'mca')  //if it's a sub-domain
      req.url = '/mca';  //append some text yourself
      res.send('Hello World MCA - Node.js');
    next(); 
  });
  
const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));