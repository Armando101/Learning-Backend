const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const rolesAvailable = {
  values: ['ADMIN_ROLE', 'USER_ROLE'],
  message: '{VALUE} is not available rol'
}

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is necessary']
  },
  email: {
    type: String,
    unique: true,
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
    default: 'USER_ROLE',
    enum: rolesAvailable
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

userSchema.methods.toJSON = function() {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;
  return userObject;
}

userSchema.plugin(uniqueValidator, { message: '{PATH} must to be unique'});

module.exports = mongoose.model('user', userSchema)