const route = require('express').Router();
const Cat = require('../models/Cat');

route.get('/',function(req, res){
    Cat.find({}, function(err, cats){
        if(err){
            console.log(err);
            return;
        }
        res.status(200).json(cats);
    });
});

route.get('/:id',function(req, res){
    Cat.findById(req.params.id, function(err, cat){
        if(err){
            console.log(err);
            return;
        }
        res.status(200).json(cat); 
    });
});

route.post('/',function(req, res){
    let cat = new Cat({
        name : req.body.name,
        race : req.body.race,
        description  : req.body.description,
        img : req.body.img,
    });

    cat.save(function(err, cat){
        if(err){
            console.log(err);
            return;
        }
        res.status(202).send(cat)
    });
    
});

route.put('/:id',function(req, res){
   Cat.findByIdAndUpdate(req.params.id, {
        name : req.body.name,
        race : req.body.race,
        description  : req.body.description,
        img : req.body.img,
        update_at : Date.now(),}, function(err, cat){
            if(err){
                console.log(err);
                return;
            }
            res.status(200).send(cat);
        }); 
});

route.delete('/:id',function(req, res){ //ejemplo de varios parametros '/:id/:nombre'
    Cat.findByIdAndRemove(req.params.id, function(err, cat){
        if(err){
            console.log(err);
            return;
        }
        res.status(200).send(cat);
    });
});

module.exports = route;