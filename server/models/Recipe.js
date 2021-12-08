const { Schema } = require('mongoose');

const recipeSchema = new Schema({
    foodId: {
        type: String,
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