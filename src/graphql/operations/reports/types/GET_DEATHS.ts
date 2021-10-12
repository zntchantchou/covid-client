/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_DEATHS
// ====================================================

export interface GET_DEATHS_getCountryReports {
  deaths: number | null;
}

export interface GET_DEATHS {
  getCountryReports: GET_DEATHS_getCountryReports[];
}

export interface GET_DEATHSVariables {
  startDate?: string | null;
  endDate?: string | null;
  countryIso: string;
}
