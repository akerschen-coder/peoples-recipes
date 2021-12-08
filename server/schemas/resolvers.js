const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models/index');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id }).select('-__v-password');
                
                return userData;
            }
            
            throw new AuthenticationError('Not logged in');
        }
    },

    Mutation: {
        // add new user 
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        //login user 
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        }, 
        // add recipe
        // yes
        saveRecipe: async (parent, { recipeData }, context) => {
            if(context.user) {
                const updated = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    {$addToSet: { savedRecipes: { recipeData }} },
                    { new: true },
                );
                console.log(updated);
                return updated;
            }
            console.log(recipeData);
            
            throw new AuthenticationError('ungabunga')
        },
        // remove recipe
        removeRecipe:  async (parent, { foodId }, context) => {
            if(context.user) {
                const updated = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    {$pull: { savedRecipes: { foodId }} },
                    { new: true },
                );
                return updated;
            }
            throw new AuthenticationError('Gotta be logged in!')
        }
    }
}

module.exports = resolvers;

