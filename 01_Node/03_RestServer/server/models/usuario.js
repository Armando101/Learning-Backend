const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is necessary']
  },
  email: {
    type: String,
    required: [true, 'Email is necessary']
  },
  password: {
    type: String,
    required: [true, 'Password is necessary']
  },
  img: {
    type: String,
    required: false
  },
  role: {
    type: String,
    required: true,
    default: 'USER_ROLE'
  },
  state: {
    type: Boolean,
    required: true,
    default: true
  },
  google: {
    type: Boolean,
    required: false,
  }
});

module.exports = mongoose.model('user', userSchema)