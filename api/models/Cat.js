const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var catSchema = new Schema({
	name : String,
	race :  String,
	description: String,
	img : String,
	create_at : {type : Date, default: Date.now},
	update_at : { type: Date, default : Date.now }
});

let Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;