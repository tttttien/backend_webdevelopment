const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email']
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minlength: [6, 'Minimum username length is 6 characters'],
    maxlength: [50, 'Maximum username length is 50 characters']
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters'],
    maxlength: [128, 'Maximum password length is 128 characters']
  }
});

// fire a function before doc saved to db
userSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// static method to login user
userSchema.statics.login = async function(email, username, password) {
  const user = await this.findOne({ 
    $or: [{ email }, { username }]
  });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email or username');
};

const User = mongoose.model('User', userSchema);

module.exports = User;