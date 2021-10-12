/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_FULL_REPORTS
// ====================================================

export interface GET_FULL_REPORTS_getCountryReports {
  deaths: number | null;
  confirmed: number | null;
  caseFatalityRatio: number | null;
  incidenceRate: number | null;
  createdAt: any | null;
}

export interface GET_FULL_REPORTS {
  getCountryReports: GET_FULL_REPORTS_getCountryReports[];
}

export interface GET_FULL_REPORTSVariables {
  startDate?: string | null;
  endDate?: string | null;
  countryIso: string;
}
