const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String
    savedRecipes: [Recipe]
  }

  type Recipe {
    name: String!
    ingredients: String!
    directions: String!
    image: String
  }

  input RecipeInput {
    name: String!
    ingredients: String!
    directions: String!
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveRecipe(recipeData: RecipeInput!): User
  }

`;
module.exports = typeDefs;