const express = require('express');
const port = 9000;
const bodyParser = require('body-parser');
let app =  express();

let productRoutes = require('./routes/products');
let dbRoutes = require('./config/db');

app.use(bodyParser.urlencoded({extend: false}));

app.use(bodyParser.json());

app.use('/products', productRoutes);

app.listen(port, function(err, res){
    if(err){
        console.log(err);
        return ;
    }
    
    console.log(`listening on ${port}`);
    
});