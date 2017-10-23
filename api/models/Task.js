const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var taskSchema = new Schema({
    username_id : [{}],
	title : String,
	content : String,
    comments : [{}],
    author : {first_name : String, lastname : String},
	create_at : {type : Date, default: Date.now},
	update_at : { type: Date, default : Date.now }
});

let Task = mongoose.model('Task', taskSchema);

module.exports = Task;