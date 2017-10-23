const route = require('express').Router();
const Task = require('../models/Task');

route.get('/',function(req, res){
    Task.find({}, function(err, tasks){
        if(err){
            console.log(err);
            return;
        }
        res.status(200).json(tasks);
    });
});

route.get('/:id',function(req, res){
    Task.findById(req.params.id, function(err, task){
        if(err){
            console.log(err);
            return;
        }
        res.status(200).json(task); 
    });
});

route.post('/',function(req, res){
    let task = new Task({
        username_id : req.body.username_id,
        title : req.body.title,
        content  : req.body.content,
        author : req.body.author,
        comments : req.body.comments,
    });

    task.save(function(err, task){
        if(err){
            console.log(err);
            return;
        }
        res.status(202).send(task)
    });
    
});

route.put('/:id',function(req, res){
   Task.findByIdAndUpdate(req.params.id, {
        username_id : req.body.username_id,
        title : req.body.title,
        content  : req.body.content,
        author : req.body.author,
        comments : req.body.comments,
        update_at : Date.now(),}, function(err, task){
            if(err){
                console.log(err);
                return;
            }
            res.status(200).send(task);
        }); 
});

route.delete('/:id',function(req, res){ //ejemplo de varios parametros '/:id/:nombre'
    Task.findByIdAndRemove(req.params.id, function(err, task){
        if(err){
            console.log(err);
            return;
        }
        res.status(200).send(task);
    });
});

module.exports = route;