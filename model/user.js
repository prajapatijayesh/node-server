var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    number: Number
});

var UserModal = mongoose.model('users', UserSchema);

module.exports = UserModal;