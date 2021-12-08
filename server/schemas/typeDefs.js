const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String
    savedRecipes: [Recipe]
  }

  type Recipe {
<<<<<<< HEAD
    foodId: String!
    label: String!
    link: String!
=======
    foodId: ID
    label: String
    link: String
>>>>>>> 8b09fcb625157ec61d9878bcc70d67d26b17c63e
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
    removeRecipe(foodId: ID!): User
  }
`;
module.exports = typeDefs;
