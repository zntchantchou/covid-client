import React, { useEffect, useState } from "react";
import Line from "src/components/graphs/Line/Line";
import { ILineData } from "src/components/graphs/Line/types";
import { format } from "date-fns";
import { useLazyQuery } from "@apollo/client";
import GraphCard from "src/components/graphs/GraphCard/GraphCard";
import { optionsWithDate, ISelectOption } from "../utils/date";
import { DocumentNode } from "@apollo/client";

interface IDataPoint {
  createdAt: any | null;
  deaths?: number | null;
  incidenceRate?: number | null;
  caseRatioFatality?: number | null;
  confirmed?: number | null;
}

interface IQueryResponse {
  getCountryReports: IDataPoint[];
}

interface IFlexibleGraphProps {
  initialData: IDataPoint[];
  title: string;
  color?: string;
  country: string;
  lazyQuery: DocumentNode;
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
}) => {
  const [graphData, setGraphData] = useState<IDataPoint[]>();
  const [startDate, setStartDate] = useState<string>();
  const [fetchData, { data: lazyData, loading: lazyLoading }] = useLazyQuery(lazyQuery, {
    variables: { startDate, countryIso: country },
  });

  useEffect(() => {
    if (initialData) setGraphData(initialData);
    if (lazyData) setGraphData(lazyData.getCountryReports)
  }, [initialData, lazyData]);

  useEffect(() => {
    if (startDate) fetchData();
  }, [startDate]);

  const reportsToLineData = (reports: IDataPoint[]): ILineData => {
    let yProperty: keyof IDataPoint;
    if (reports.length) {
      yProperty = Object.keys(reports[0]).filter(
        (p) => p !== "createdAt" && p !== "__typename"
      )[0] as keyof IDataPoint;
    }
    const data = reports
      .map((r) => ({
        x: format(new Date(r.createdAt), "dd/MMM"),
        y: r[yProperty] as number,
      }))
      .filter((v) => !isNaN(v.y));

    return [{ data, id: "incidence rate", color: "hsl(320, 70%, 50%)" }];
  };

  const handleDateChange = (option: ISelectOption) => {
    const asDate = optionsWithDate[option.value].date;
    setStartDate(asDate);
  };

  return graphData ? (
    <GraphCard
      title={title}
      withDate
      onDateChange={(v) => handleDateChange(v)}
      content={
        <Line
          data={reportsToLineData(graphData)}
          axisBottomLegend="date"
          axisLeftLabel="incidence rate"
        />
      }
    />
  ) : // render loader instead
  null;
};

export default FlexibleGraph;
