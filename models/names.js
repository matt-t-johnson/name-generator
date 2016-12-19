var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var NameSchema = new Schema({
	entry: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	origin: {
		type: String
	},
	meaning: {
		type: String
	},
	nameType: {
		type: String
	}
});

var Names = mongoose.model("Names", NameSchema);

module.exports = Names;