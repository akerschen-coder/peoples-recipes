const { Schema } = require('mongoose');

const postRecipe = new Schema({
    foodId: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    likeCount: {
        type: Number,
        default: 0,
    },
})

module.exports = postRecipe;