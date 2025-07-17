let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
    },
    points: {
        type: Number,
        required: true,
    },
    userId: {
        type: Number,
        required: true,
    },

},{timestamps: true})

let UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;