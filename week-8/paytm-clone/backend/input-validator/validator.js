const zod = require('zod')

const userSignupSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string()
})

module.exports = {
  userSignupSchema
}