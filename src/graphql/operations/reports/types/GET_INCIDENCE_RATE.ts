/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_INCIDENCE_RATE
// ====================================================

export interface GET_INCIDENCE_RATE_getCountryReports {
  incidenceRate: number | null;
  createdAt: any | null;
}

export interface GET_INCIDENCE_RATE {
  getCountryReports: GET_INCIDENCE_RATE_getCountryReports[];
}

export interface GET_INCIDENCE_RATEVariables {
  startDate?: string | null;
  endDate?: string | null;
  countryIso: string;
}
