/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_CASE_FATALITY_RATIO
// ====================================================

export interface GET_CASE_FATALITY_RATIO_getCountryReports {
  caseFatalityRatio: number | null;
}

export interface GET_CASE_FATALITY_RATIO {
  getCountryReports: GET_CASE_FATALITY_RATIO_getCountryReports[];
}

export interface GET_CASE_FATALITY_RATIOVariables {
  startDate?: string | null;
  endDate?: string | null;
  countryIso: string;
}
