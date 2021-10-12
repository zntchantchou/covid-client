import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query getCountries {
    getCountries {
      provinces {
        provinceState
        iso
      }
      country
      iso
    }
  }
`;
