const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String
    savedRecipes: [Recipe]
  }

  type Recipe {
    recipeId: ID!
    name: String!
    ingredients: String!
    directions: String!
    image: String
  }

  input RecipeInput {
    recipeId: String!
    name: String!
    ingredients: [String]
    directions: [String]
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    all: Recipe
  } 

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }

`;
module.exports = typeDefs;