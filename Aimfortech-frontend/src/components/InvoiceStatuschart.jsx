import { RadialBarChart, RadialBar } from "recharts";
import { DotIcon, EllipsisVertical } from "lucide-react";

const data = [
  { name: "₹175k", uv: 75, fill: "url(#gradient-blue-purple-yellow-blue)" },
];

const InvoiceStatusChart = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow w-full">
      <div className="flex justify-between flex-row">
        <h1 className="text-lg font-bold">Invoice Status</h1>
        <EllipsisVertical className="text-gray-500" />
      </div>

      <div className="relative flex items-center justify-center">
        <svg width="0" height="0">
          <defs>
            <linearGradient
              id="gradient-blue-purple-yellow-blue"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0%" stopColor="#3b82f6" /> {/* Blue */}
              <stop offset="50%" stopColor="#8b5cf6" /> {/* Purple */}
              <stop offset="100%" stopColor="#fde047" /> {/* Yellow */}
            </linearGradient>
          </defs>
        </svg>

        <RadialBarChart
          width={250}
          height={250}
          innerRadius="80%"
          outerRadius="100%"
          data={data}
          startAngle={90}
          endAngle={-270}
        >
          <RadialBar
            minAngle={15}
            background={{ fill: "#f3f4f6" }}
            clockWise
            dataKey="uv"
          />
        </RadialBarChart>

        {/* Center Label */}
        <div className="absolute text-center">
          <p className="text-2xl font-bold text-black">₹175k</p>
          <p className="text-sm text-gray-500">Total Invoice Amount</p>
          <p className="text-sm text-green-600 font-semibold">+10%</p>
        </div>
      </div>
      <div className="mt-4">
        <ul className="list-disc pl-4 text-sm space-y-2">
          <li className="flex flex-row justify-between">
            <div className="flex flex-row justify-items-stretch">
              <DotIcon className="text-purple-500 size-7" />Paid
            </div><span>₹10,000</span>
          </li>
          <li className="flex flex-row justify-between">
            <div className="flex flex-row justify-items-stretch">
              <DotIcon className="text-blue-500 size-7" />Unpaid
            </div> <span>₹50,000</span>
          </li>
          <li className="flex flex-row justify-between">
            <div className="flex flex-row justify-items-stretch">
              <DotIcon className="text-orange-500 size-7" />Draft
            </div> <span>₹80,000</span>
          </li>
          <li className="flex flex-row justify-between">
            <div className="flex flex-row justify-items-stretch">
              <DotIcon className="text-red-500 size-7" />Overdue
            </div> <span>₹150,000</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InvoiceStatusChart;
