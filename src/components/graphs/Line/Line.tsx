import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface LineGraphProps {
  dataKey: string;
  data: any[];
}
const LineGraph: React.FC<LineGraphProps> = ({ dataKey, data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tickCount={7} />
        <YAxis dataKey={dataKey} domain={['dataMin', 'dataMax']}/>
        <Tooltip />
        <Line
          type="monotone"
          dataKey={dataKey}
          stroke="#0033a0"
          activeDot={{ r: 4 }}
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
