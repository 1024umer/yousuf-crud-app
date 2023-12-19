const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    phone : Number,
    age : Number,
    city : String,
    country : String,
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;