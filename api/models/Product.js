const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = new Schema({
    name : String,
    description : String,
    pricebuy : Number,
    pricesell : Number,
    dimensions: {
        height: Number,
        width: Number
    },
    create_at : { type: Date, default : Date.now },
    update_at : { type: Date, default : Date.now }
});

let Product = mongoose.model('Product', productSchema);

module.exports = Product;