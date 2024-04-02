const mongoose = require('mongoose');

const shareModel = new mongoose.Schema({
    post: {
        type: String,
        required: true
    },
    user: {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model("share", shareModel)