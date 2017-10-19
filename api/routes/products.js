const route = require('express').Router();
const Product = require('../models/Product');

route.get('/',function(req, res){
    Product.find({}, function(err, products){
        if(err){
            console.log(err);
            return;
        }
        res.status(200).json(products);
    })
    //res.status(200).json({'nombre':'fernando', last_name : 'hernandez'});
    //res.status(200).send('Hola mundo');
});

route.get('/:id',function(req, res){
    Product.findById(req.params.id, function(err, product){
        if(err){
            console.log(err);
            return;
        }
        res.status(200).json(product); //or res.status(200).json(product);
    });
});

route.post('/',function(req, res){
    let product = new Product({
        name : req.body.name,
        description : req.body.description,
        pricebuy : req.body.pricebuy,
        pricesell : req.body.pricesell,
    });

    product.save(function(err, product){
        if(err){
            console.log(err);
            return;
        }
        res.status(202).send(product)
    });
    
});

route.put('/:id',function(req, res){
    
});

route.delete('/:id',function(req, res){ //ejemplo de varios parametros '/:id/:nombre'
    Product.findByIdAndRemove(req.params.id, function(err, product){
        if(err){
            console.log(err);
            return;
        }
        res.status(200).send(product);
    });
});

module.exports = route;