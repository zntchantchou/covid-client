/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ResponsiveLine } from "@nivo/line";
import { data as mockdata } from './data';
import {ILineData} from 'src/components/graphs/Line/types';
import { useEffect } from "react";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ILineProps {data: ILineData, axisLeftLabel: string,axisBottomLegend: string }

const LineGraph:React.FC<ILineProps> = ({data, axisLeftLabel, axisBottomLegend }) => {
  console.log('graphData', data);
  return data && data[0] && data[0].data && data[0].data.length > 0 ? 
    // @ts-ignore
  <ResponsiveLine
    data={data}
    margin={{ top: 30, right: 30, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: axisBottomLegend,
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: axisLeftLabel,
      legendOffset: -40,
      legendPosition: "middle",
      tickValues: 7
    }}
    pointSize={2}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[]}
  /> : <p> no data available </p>;
  };

export default LineGraph;
