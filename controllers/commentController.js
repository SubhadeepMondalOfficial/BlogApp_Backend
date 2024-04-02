//import models
const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

//business logic

exports.createComment = async (req, res) => {
    try {
        //fetch data from req body
        const {post, user, body} = req.body;
        //create a comment object
        const comment = new Comment({
            post,user,body
        })

        //save the new comment object into the database
        const saveComment = await comment.save();

        //find the post by Id and then add new comment to the post comments array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: saveComment._id}}, {new: true})
                            .populate("comments")
                            .exec();

    res.status(200).json({
        success: true,
        post: updatedPost,
        message: "Comment Added Successfully"
    });
        
    } catch (error) {
       return res.status(500).json({
            error: "Error while creating comment",
            errorDetails: error
        });
        
    }
}