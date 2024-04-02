const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "post" // referece to the post model,
    },
    user:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("like", likeSchema);