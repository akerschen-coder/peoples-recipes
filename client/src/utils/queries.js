import { gql } from "@apollo/client";

export const GET_USER = gql`
  query {
    me {
      username
      email
      savedRecipes {
        foodId
        label
        image
        link
      }
    }
  }
`;
