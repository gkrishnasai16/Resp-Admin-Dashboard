import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "January", Total: 1200, LastYear: 1100 },
  { name: "February", Total: 2100, LastYear: 1555 },
  { name: "March", Total: 800, LastYear: 1200 },
  { name: "April", Total: 1600, LastYear: 1980 },
  { name: "May", Total: 900, LastYear: 551 },
  { name: "June", Total: 1700, LastYear: 1700 }
];

const Chart = ({ height, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart
          width={500}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="lastYtotal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            name="année en cours"
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
          <Area
            name="année dernière"
            type="monotone"
            dataKey="LastYear"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#lastYtotal)"
          />
          <Legend verticalAlign="top" height={36} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
