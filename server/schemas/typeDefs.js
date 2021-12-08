const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String
    savedRecipes: [Recipe]
  }

  type Recipe {
    foodId: ID
    label: String
    link: String
    image: String
  }

  input RecipeInput {
    foodId: String!
    label: String!
    link: String!
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
    removeRecipe(foodId: String!): User
  }
`;
module.exports = typeDefs;
