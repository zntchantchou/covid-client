/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCountries
// ====================================================

export interface getCountries_getCountries_provinces {
  provinceState: string;
  iso: string;
}

export interface getCountries_getCountries {
  provinces: getCountries_getCountries_provinces[];
  country: string;
  iso: string;
}

export interface getCountries {
  getCountries: getCountries_getCountries[];
}
