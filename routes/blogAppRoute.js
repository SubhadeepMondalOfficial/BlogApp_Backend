//require express after install in dipendencies to run server through express
const express = require('express');
const router = express.Router();

//import controllers
const {createPost, getAllPosts} = require('../controllers/postController');
const {createComment} = require('../controllers/commentController')
const {likePost, unlikePost} = require('../controllers/likeController')

// link router with controller
router.post('/posts/create', createPost);
router.get('/posts', getAllPosts)
router.post('/comments/create', createComment)
router.post('/likes/like', likePost)
router.post('/likes/unlike', unlikePost)

//export router module
module.exports = router;