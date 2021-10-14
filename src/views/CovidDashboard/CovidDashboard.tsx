import React, { useState } from "react";
import styles from "src/views/CovidDashboard/CovidDashboard.module.css";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "src/graphql/operations/countries/countries";
import {
  GET_FULL_REPORTS,
  GET_CASE_FATALITY_RATIO,
  GET_CONFIRMED,
  GET_DEATHS,
  GET_INCIDENCE_RATE,
} from "src/graphql/operations/reports/reports";
import { countriesVariable } from "src/graphql/variables/countries";
import {
  GET_FULL_REPORTS_getCountryReports as IFullReport,
  GET_FULL_REPORTS as IFullReports,
  GET_FULL_REPORTSVariables as IFullReportsVariables,
} from "src/graphql/operations/reports/types/GET_FULL_REPORTS";

import {
  GET_INCIDENCE_RATE_getCountryReports as IIncidenceRate,
} from "src/graphql/operations/reports/types/GET_INCIDENCE_RATE";

import FlexibleGraph from "src/views/CovidDashboard/FlexibleGraph/FlexibleGraph";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICovidDashboardProps {}

const CovidDashboard: React.FC<ICovidDashboardProps> = () => {
  const { data: countriesData } = useQuery(GET_COUNTRIES);
  const [country, setCountry] = useState<string>("FRA");
  const {
    data: reportsData,
    error: reportsError,
    loading: reportsLoading,
  } = useQuery<IFullReports, IFullReportsVariables>(GET_FULL_REPORTS, {
    variables: { countryIso: country },
  });

  const extractReportProperty = (prop: keyof IFullReport, r: IFullReport) => ({
    [prop]: r[prop],
    createdAt: r.createdAt,
  });

  const IRData = reportsData?.getCountryReports.map((r) =>
    extractReportProperty("incidenceRate", r)
  ) as IIncidenceRate[];

  if (reportsData) console.log("reportsData", reportsData, IRData);
  if (reportsError) console.log("error", reportsError);
  if (reportsLoading) console.log("loading", reportsLoading);
  if (countriesData) countriesVariable(countriesData.getCountries);

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1 className={styles.title}>Covid data</h1>
      </div>
      <div className={styles.content}>
        <FlexibleGraph
          title="Incidence rate"
          country={country}
          lazyQuery={GET_INCIDENCE_RATE}
          color="blue"
          initialData={IRData}
        />
        <FlexibleGraph
          title="Case Fatality Ratio"
          country={country}
          lazyQuery={GET_CASE_FATALITY_RATIO}
          color="blue"
          initialData={IRData}
        />
        <FlexibleGraph
          title="Confirmed cases"
          country={country}
          lazyQuery={GET_CONFIRMED}
          color="blue"
          initialData={IRData}
        />
        <FlexibleGraph
          title="Deaths"
          country={country}
          lazyQuery={GET_DEATHS}
          color="blue"
          initialData={IRData}
        />
      </div>
    </div>
  );
};

export default CovidDashboard;
