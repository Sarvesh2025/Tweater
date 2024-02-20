const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    userName: { type: String, required: true, trim: true, unique: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
    prifilePic: { type: String, default:"/images/profile.jpg"},
}, {timestamps: true});

var User = mongoose.model('User', UserSchema);
module.exports = User;

