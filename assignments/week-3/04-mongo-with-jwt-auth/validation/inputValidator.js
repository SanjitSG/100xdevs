const zod = require('zod');

const adminSchema = zod.object({
  username: zod.string(),
  password: zod.string().min(6)
})

const userSchema = zod.object({
  username: zod.string().min(1, "Username is required"),
  password: zod.string().min(6, "Password must be at least 6 characters long"),
  purchasedCourse: zod.array(zod.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid Course ID"))
})

const courseSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
  imageLink: zod.string(),
  price: zod.number()
})
module.exports = {
  adminSchema,
  userSchema,
  courseSchema
};