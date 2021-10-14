import React, { useEffect, useState } from "react";
import Line from "src/components/graphs/Line/Line";
import { ILineData } from "src/components/graphs/Line/types";
import { format } from "date-fns";
import { useLazyQuery } from "@apollo/client";
import GraphCard from "src/components/graphs/GraphCard/GraphCard";
import { GET_INCIDENCE_RATE_getCountryReports as IDataPoint } from "src/graphql/operations/reports/types/GET_INCIDENCE_RATE";
import { GET_INCIDENCE_RATE } from "src/graphql/operations/reports/reports";
import { GET_INCIDENCE_RATE as IGetIRResponse, GET_INCIDENCE_RATEVariables as IGetIRVariables } from "src/graphql/operations/reports/types/GET_INCIDENCE_RATE";
import { optionsWithDate, ISelectOption } from "../utils/date";

interface IIncidenceRateGraphProps {
  initialData: IDataPoint[];
  color?: string;
  country: string;
}

/**
 * this component receives its data from it's parent initially.
 * Then it fetches its data when the date is changed by the user
 */

const IncidenceRateGraph: React.FC<IIncidenceRateGraphProps> = ({ initialData, country }) => {
  const [IRData, setIRData] = useState<IDataPoint[]>();
  const [startDate, setStartDate] = useState<string>();
  const [
    fetchIRData,
    { data: lazyData },
  ] = useLazyQuery<IGetIRResponse, IGetIRVariables>(GET_INCIDENCE_RATE, { variables: { startDate, countryIso: country} });

  useEffect(() => {
    if (initialData) {
      setIRData(initialData);
    }
    if(lazyData) {
      setIRData(lazyData.getCountryReports);
    }
  }, [initialData, lazyData]);

  useEffect(() => {
    if(startDate) fetchIRData();
  }, [startDate])

  const formatReports = (reports: IDataPoint[]): ILineData => {
    const data = reports.map((r) => ({
      x: format(new Date(r.createdAt), "dd/MMM"),
      y: r.incidenceRate as number,
    }));
    return [{ data, id: "incidence rate", color: "hsl(320, 70%, 50%)" }];
  };

  const handleDateChange = (option: ISelectOption) => {
    const asDate = optionsWithDate[option.value].date;
    setStartDate(asDate);
  };

  return IRData ? (
    <GraphCard
      title="Incidence rate"
      withDate
      onDateChange={(v) => handleDateChange(v)}
      content={
        <Line
          data={formatReports(IRData)}
          axisBottomLegend="date"
          axisLeftLabel="incidence rate"
        />
      }
    />
  ) : // render loader instead
  null;
};

export default IncidenceRateGraph;
