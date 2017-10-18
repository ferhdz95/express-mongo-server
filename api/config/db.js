const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/micoleccion', {useMongoClient : true});

var db = mongoose.connection;

db.on('err', function(){
    console.log("Error al tratar de conectar con mongo");
});

db.once('open', function(err){
    if(err)
        console.log('error');

    console.log("Conectado correctamente a mongo");
});