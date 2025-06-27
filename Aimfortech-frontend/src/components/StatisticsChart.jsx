import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { EllipsisVertical } from "lucide-react";

const data = [
  { name: "Jan", amount:"100",  stock: 600, sales: 400 },
  { name: "Feb", amount:"200", stock: 750, sales: 500 },
  { name: "Mar", amount:"300", stock: 900, sales: 600 },
  { name: "Apr", amount:"400", stock: 650, sales: 550 },
  { name: "May", amount:"500", stock: 750, sales: 650 },
  { name: "Jun", amount:"600", stock: 250, sales: 300 },
  { name: "Jul", amount:"700", stock: 650, sales: 700 },
  { name: "Aug", amount:"800", stock: 950, sales: 500 },
  { name: "Sep", amount:"900", stock: 800, sales: 450 },
  { name: "Oct", amount:"1000", stock: 700, sales: 650 },
  { name: "Nov", amount:"1100", stock: 950, sales: 550 },
  { name: "Dec", amount:"1200", stock: 900, sales: 1000 },
];

const StatisticsChart = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow w-full h-full">
      <div className="flex flex-row justify-between items-center mb-2">
        <h1 className="text-lg font-semibold text-gray-800">Statistics</h1>
        <EllipsisVertical/>
      </div>
      <p className="mb-6 text-sm text-gray-500">Stock and Sales</p>
      <div className="w-full h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 40, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#666' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#666' }}
              label={{ 
                value: 'Amount', 
                angle: -90, 
                position: 'insideLeft',
                style: { textAnchor: 'middle', fontSize: '12px', fill: '#666' }
              }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '12px'
              }}
            />
            <Legend
              verticalAlign="top"
              align="center"
              iconType="rect"
              iconSize={12}
              wrapperStyle={{ 
                top: 0, 
                fontSize: '12px',
                paddingBottom: '20px'
              }}
            />
            <Line
              type="monotone"
              dataKey="stock"
              name="Stock"
              stroke="#ff6b9d"
              strokeWidth={3}
              dot={{ r: 4, fill: "#ff6b9d", strokeWidth: 0 }}
              activeDot={{ r: 6, fill: "#ff6b9d" }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              name="Sales"
              stroke="#ffa726"
              strokeWidth={3}
              dot={{ r: 4, fill: "#ffa726", strokeWidth: 0 }}
              activeDot={{ r: 6, fill: "#ffa726" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatisticsChart;