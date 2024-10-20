const zod = require("zod");

const userSignupSchema = zod.object({
	username: zod.string(),
	password: zod.string(),
	firstname: zod.string(),
	lastname: zod.string(),
});

const updateUserInfo = zod.object({
	password: zod.string().optional(),
	firstname: zod.string().optional(),
	lastname: zod.string().optional(),
});
module.exports = {
	userSignupSchema,
	updateUserInfo,
};
