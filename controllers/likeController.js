//import models
const Post = require('../models/postModel');
const Like = require('../models/likeModel')

//business logic

//!================ Logic to Like Posts ===================

exports.likePost = async (req, res) => {
   try {
     //fetch data from req body
     const {post, user} = req.body;

     //create a like object
     const like = new Like({
         post, user
     })
 
     //save the new like object into the database
     const saveLike = await like.save()
 
     //find the post by Id and then add new like id into the post like array
     const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: saveLike._id}}, {new: true})
                        .populate("likes")
                        .exec();
                        
    res.status(200).json({
        success: true,
        post: updatedPost,
        message: "Like Added Successfully"
    });
    
   } catch (error) {
    return res.status(500).json({
        success: false,
        error: "Error while adding Like",
        errorDetails: error.message
    });
   }
}

//!========== Logic to UnLike Posts ===============
exports.unlikePost = async (req, res) => {
    try {
        const {post, like} = req.body;

    // Find the like document using like-ID and delete 
    const deletedLike = await Like.findByIdAndDelete(like)

    // Now find that post using post-ID in req body and then find that like which is deleted in like collection and then remove or update the post document
    const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id}}, {new: true})

    res.status(200).json({
        success: true,
        post: updatedPost,
        message: "Like remove Successfully both from likes collection and post collection in DB"
    })

        
    } catch (error) {
        return res.status(500).json({
            error: "Error While removing Like",
            errorDetails: error
        })
    }


}
