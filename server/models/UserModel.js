const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
},
    { timestamps: true }
)


module.exports = mongoose.model("user", userSchema);