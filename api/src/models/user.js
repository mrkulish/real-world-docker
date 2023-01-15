const mongoose = require('mongoose');

const User = mongoose.model('User', {userName: String, age: Number});
module.exports.User = User