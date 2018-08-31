const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    mobileNo: String,
	serviceType:  String,
	gender: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
