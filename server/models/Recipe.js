const { Schema } = require('mongoose');

const postRecipe = new Schema({
    title: String,
    message: String,
    // need to be able to link token/username 
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

module.exports = postRecipe;