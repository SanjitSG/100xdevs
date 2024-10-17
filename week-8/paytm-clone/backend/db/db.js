const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sanjit:xt22Uu76Ki7ceEMd@posttracket.plwpuqj.mongodb.net/paytm')

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  password: String
})

const User = mongoose.model('User', userSchema)

module.exports = {
  User
}