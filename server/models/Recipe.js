const { Schema, model } = require('mongoose');

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },    
    ingredients: {
        type: [String],
        required: true,
    },
    directions: {
        type: [String],
        required: true,
    },
    image: {
        type: String,
    },
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const Recipe = model('Recipe', recipeSchema);
module.exports = Recipe;