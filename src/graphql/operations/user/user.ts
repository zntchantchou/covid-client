import { gql } from "@apollo/client";

/* eslint-disable */
export const GET_USER_PROFILE = gql`
  query GET_USER_PROFILE {
    getUser {
      firstName
      lastName
      email
      position
      avatar
      status @client
    }
  }
`;

export const GET_USER_AVATAR = gql`
  query GET_USER_AVATAR {
    getUser {
      avatar
    }
  }
`;