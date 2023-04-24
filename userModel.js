const mongoose = require("mongoose")
const { Schema } = require('mongoose')

const userformat = new Schema({
    Name: {
        type: String,
        maxlength: 25,
        required: true,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        required:true
    },
    Password: {
        type: String,
        required: true
    }
})

const userModel = mongoose.model('users',userformat)
module.exports = userModel