import { gql } from 'graphql-tag';

export const GET_USER = gql`
  query {
    me {
      username
      email
    }
  }
`;