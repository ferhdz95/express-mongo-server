const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    username : String,
	firstname : String,
	lastname : String,
	create_at : {type : Date, default: Date.now},
	update_at : { type: Date, default : Date.now }
});

let User = mongoose.model('User', userSchema);

module.exports = User;