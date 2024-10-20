const mongoose = require("mongoose");

mongoose.connect(
	"mongodb+srv://sanjit:xt22Uu76Ki7ceEMd@posttracket.plwpuqj.mongodb.net/paytm",
);

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true,
		minLength: 3,
		maxLength: 20,
	},
	password: {
		type: String,
		required: true,
		minLength: 6,
	},
	firstname: {
		type: String,
		required: true,
		trim: true,
		maxLength: 20,
	},
	lastname: {
		type: String,
		required: true,
		trim: true,
		maxLength: 20,
	},
});

const User = mongoose.model("User", userSchema);

module.exports = {
	User,
};
