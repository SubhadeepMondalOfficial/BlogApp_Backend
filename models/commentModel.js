const mongoose = require('mongoose');

//route handler
const commentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post", // reference to the post model
    },
    user: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    }
});

//export model schema
module.exports = mongoose.model("comment", commentSchema)