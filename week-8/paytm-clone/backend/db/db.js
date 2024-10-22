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

const accountSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	balance: {
		type: Number,
		required: true,
		default: 0.0,
	},
});
const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports = {
	User,
	Account,
};
