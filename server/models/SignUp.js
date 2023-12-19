const mongoose = require('mongoose')

const SignUpSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email: String,
    password: String,
});
const SignUpModel = mongoose.model('signups',SignUpSchema);
module.exports = SignUpModel;