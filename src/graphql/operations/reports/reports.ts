import { gql } from "@apollo/client";

export const GET_FULL_REPORTS = gql`
  query GET_FULL_REPORTS(
    $startDate: String
    $endDate: String
    $countryIso: String!
  ) {
    getCountryReports(
      startDate: $startDate
      endDate: $endDate
      countryIso: $countryIso
    ) {
      deaths
      confirmed
      caseFatalityRatio
      incidenceRate
      createdAt
    }
  }
`;

export const GET_CONFIRMED = gql`
  query GET_CONFIRMED(
    $startDate: String
    $endDate: String
    $countryIso: String!
  ) {
    getCountryReports(
      startDate: $startDate
      endDate: $endDate
      countryIso: $countryIso
    ) {
      confirmed
    }
  }
`;

export const GET_CASE_FATALITY_RATIO = gql`
  query GET_CASE_FATALITY_RATIO(
    $startDate: String
    $endDate: String
    $countryIso: String!
  ) {
    getCountryReports(
      startDate: $startDate
      endDate: $endDate
      countryIso: $countryIso
    ) {
      caseFatalityRatio
    }
  }
`;
export const GET_INCIDENCE_RATE = gql`
  query GET_INCIDENCE_RATE(
    $startDate: String
    $endDate: String
    $countryIso: String!
  ) {
    getCountryReports(
      startDate: $startDate
      endDate: $endDate
      countryIso: $countryIso
    ) {
      incidenceRate
    }
  }
`;
 
export const GET_DEATHS = gql`
  query GET_DEATHS(
    $startDate: String
    $endDate: String
    $countryIso: String!
  ) {
    getCountryReports(
      startDate: $startDate
      endDate: $endDate
      countryIso: $countryIso
    ) {
      deaths
    }
  }
`;