const route = require('express').Router();

route.get('/',function(req, res){
    res.json({'nombre':'fernando'});
    //res.status(200).send('Hola mundo');
});

route.post('/',function(req, res){
    res.status(200).send('Agregado');
});

route.put('/',function(req, res){
});

route.delete('/',function(req, res){
});

module.exports = route;

