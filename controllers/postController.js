const Post = require('../models/postModel');

//!============== Create New Post Logic ==============
 
exports.createPost = async (req, res) => {
    try {
        const {title, body} = req.body;

        const newPost = await Post.create({title, body});

        res.status(200).json({
            success: true,
            post: newPost,
            message: "New Post Created Successfully"
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Failed to create New Post",
            errorMessage: error
        })
    }
}

//!============== Get All Posts Logic ==============

exports.getAllPosts = async (req, res) => {
    try {
        const allPosts = await Post.find().populate('likes').populate('comments').exec()

        res.status(200).json({
            success: true,
            post: allPosts,
            message: "All Posts fetch Successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Failed to fetch all Posts",
            errorMessage: error
        })
        
    }

    
}