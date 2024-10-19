const zod = require('zod')

const userSignupSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string()
})

const updateUserInfo = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional()
})
module.exports = {
  userSignupSchema, updateUserInfo
}