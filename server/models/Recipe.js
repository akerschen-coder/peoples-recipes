const { Schema } = require('mongoose');

const recipeSchema = new Schema({
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
})

module.exports = recipeSchema;