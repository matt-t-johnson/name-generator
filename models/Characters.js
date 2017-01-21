var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CharacterSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	fullName: {
		type: String,
		required: true
	}
});

var Characters = mongoose.model("Characters", CharacterSchema);

module.exports = Characters;