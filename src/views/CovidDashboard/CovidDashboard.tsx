import React, { useState } from "react";
import styles from "src/views/CovidDashboard/CovidDashboard.module.css";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "src/graphql/operations/countries";
import { GET_FULL_REPORTS } from "src/graphql/operations/reports";
import { countriesVariable } from "src/graphql/variables/countries";
import Dropdown from "src/components/Dropdown/Dropdown";
// import LineGraph from "src/components/graphs/Line/Line";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICovidDashboardProps {}

const CovidDashboard: React.FC<ICovidDashboardProps> = () => {
  const { data: countriesData } = useQuery(GET_COUNTRIES);
  const [country, setCountry] = useState<string | number>("LTU");
  const {
    data: reportsData,
    error: reportsError,
    loading: reportsLoading,
  } = useQuery(GET_FULL_REPORTS, { variables: { countryIso: country } });
  if (reportsData) console.log('reportsData', reportsData);
  if (reportsError) console.log("error", reportsError);
  if (reportsLoading) console.log("loading", reportsLoading);
  if (countriesData) countriesVariable(countriesData.getCountries);
  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1 className={styles.title}>Covid data</h1>
      </div>
      <Dropdown
        options={options}
        onChange={(v) => {
          console.log("onChange function", v);
          setCountry(v);
        }}
        width="20em"
        defaultValue={country}
      />
      <div style={{ height: '28em', padding: '1em' }}>
        {/* <LineGraph /> */}
      </div>
    </div>
  );
};

const options = Array(4)
  .fill(0)
  .map((v, i) => ({
    value: i === 0 ? "FRA" : i,
    content: <p>I am {i}</p>,
  }));
export default CovidDashboard;
