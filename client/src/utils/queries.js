import { gql } from '@apollo/client';

export const GET_USER = gql`
  query {
    me {
      _id
      username
      email
      savedRecipes {
        recipeId
        name
        ingredients
        directions
        image
      }
    }
  }
`;

export const GET_ALL = gql`
query {
  all {
      recipeId
      name
      ingredients
      directions
      image
  }
}
`;