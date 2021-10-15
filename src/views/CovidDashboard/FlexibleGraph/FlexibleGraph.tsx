import React, { useEffect, useState } from "react";
import Line from "src/components/graphs/Line/Line";
import { useLazyQuery } from "@apollo/client";
import GraphCard from "src/components/graphs/GraphCard/GraphCard";
import { optionsWithDate, ISelectOption } from "../utils/date";
import Loader from "src/components/Loader/Loader";
import format from "date-fns/format";
import { DocumentNode } from "@apollo/client";

interface IDataPoint {
  createdAt: any | null;
  deaths?: number | null;
  incidenceRate?: number | null;
  caseRatioFatality?: number | null;
  confirmed?: number | null;
}

interface IFlexibleGraphProps {
  initialData: IDataPoint[];
  title: string;
  color?: string;
  country: string;
  lazyQuery: DocumentNode;
  dataKey: string;
}

/**
 * this component receives its data from it's parent initially.
 * Then it fetches its data when the date is changed by the user
 */

const FlexibleGraph: React.FC<IFlexibleGraphProps> = ({
  initialData,
  country,
  lazyQuery,
  title,
  dataKey
}) => {
  const [graphData, setGraphData] = useState<IDataPoint[]>();
  const [startDate, setStartDate] = useState<string>();
  const [fetchData, { data: lazyData, loading: lazyLoading }] = useLazyQuery(
    lazyQuery,
    {
      variables: { startDate, countryIso: country },
    }
  );

  useEffect(() => {
    if (initialData) setGraphData(initialData);
    if (lazyData) setGraphData(lazyData.getCountryReports);
  }, [initialData, lazyData]);

  useEffect(() => {
    if (startDate) fetchData();
  }, [startDate]);

  useEffect(() => {
    if (graphData) reportsToLineData(graphData);
  }, [graphData]);

  // eslint-disable-next-line
  // @ts-ignore
  const reportsToLineData = (reports: IDataPoint[]): any[] => {
    const formatted = reports.map((r) => ({ ...r, name: format(new Date(r.createdAt), "dd-MM")}));
    console.log("formatted", formatted);
    return formatted;
  };

  const handleDateChange = (option: ISelectOption) => {
    const asDate = optionsWithDate[option.value].date;
    setStartDate(asDate);
  };

  return (
    <GraphCard
      title={title}
      withDate
      onDateChange={(v) => handleDateChange(v)}
      content={lazyLoading || !graphData ? <Loader /> : <Line dataKey={dataKey} data={reportsToLineData(graphData)}/>}
    />
  );
};

export default FlexibleGraph;
