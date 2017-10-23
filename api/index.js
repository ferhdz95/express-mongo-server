const express = require('express');
const port = 9000;
const bodyParser = require('body-parser');
let app =  express();

let taskRoutes = require('./routes/tasks');
let dbRoutes = require('./config/db');

app.use(bodyParser.urlencoded({extend: false}));

app.use(bodyParser.json());
app.use(bodyParser.json({type : 'application/vnd.api+json'}))

app.use('/tasks', taskRoutes);

app.listen(port, function(err, res){
    if(err){
        console.log(err);
        return ;
    }
    
    console.log(`listening on ${port}`);
    
});