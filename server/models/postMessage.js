import mongoose from 'mongoose'; 

//rememeber to pull all of them 
const postSchema = mongoose.Schema({
    title: String,
    ingredients: String,
    directions: String,
    message: String,
    creator: String, 
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date, 
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;