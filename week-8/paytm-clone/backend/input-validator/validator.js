const zod = require('zod')

const userSchema = zod.object({
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string()
})

module.exports = {
  userSchema
}