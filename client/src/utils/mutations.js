import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_RECIPE = gql`
  mutation saveRecipe($recipeData: RecipeInput!) {
    saveRecipe(recipeData: $recipeData) {
      username
      savedRecipes {
        foodId
        label
        image
        link
      }
    }
  }
`;

export const REMOVE_RECIPE = gql`
  mutation removeRecipe($foodId: String!) {
    removeRecipe(foodId: $foodId) {
      _id
      username
      savedRecipes {
        foodId
        label
        image
        link
      }
    }
  }
`;
