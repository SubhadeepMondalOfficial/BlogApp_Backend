const shareSchema = require('../models/shareModel')

exports.sharePost = async (req, res) => {
    try {
        const {post, user} = req.body;

        const response = await shareSchema.create({post, user})

        res.status(200).json({
            success: true,
            post: response,
            message: "Share Details added Successfully"
        });
        
    } catch (error) {
        return res.status(500).json({
            error: "Error while adding Share details",
            errorDetails: error.message
        });
    }
}