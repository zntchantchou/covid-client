/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_CONFIRMED
// ====================================================

export interface GET_CONFIRMED_getCountryReports {
  confirmed: number | null;
  createdAt: any | null;
}

export interface GET_CONFIRMED {
  getCountryReports: GET_CONFIRMED_getCountryReports[];
}

export interface GET_CONFIRMEDVariables {
  startDate?: string | null;
  endDate?: string | null;
  countryIso: string;
}
