import { MoveUp ,EllipsisVertical} from "lucide-react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const data = [{ name: "75.55%", uv: 20, fill: "red" }];

const RevenueChart = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow w-full">
      <div className=" flex flex-row justify-between">
        <h1 className="text-lg font-bold mb-2">Revenue</h1>
        <EllipsisVertical />
      </div>
      
      <p>Revenue Target</p>
      <RadialBarChart
        width={250}
        height={250}
        innerRadius="80%"
        outerRadius="100%"
        data={data}
        startAngle={100}
        endAngle={-190}
      >
        <RadialBar minAngle={30} background clockWise dataKey="uv" />
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          align="center"
        />
      </RadialBarChart>

      <p className="mt-7">
        You earned <span className="font-bold">₹15,000</span> today, which is
        greater than yesterday.
      </p>
      <div className="flex flex-row justify-between mt-7">
        <p>
          Total Revenue
          <h1 className="font-bold flex flex-row">
            ₹100K{" "}
            <span className="text-green-700">
              <MoveUp />
            </span>
          </h1>
        </p>
        <p>
          Today
          <h1 className="font-bold flex flex-row">
            ₹15K
            <span className="text-green-700">
              <MoveUp />
            </span>
          </h1>
        </p>
      </div>
    </div>
  );
};

export default RevenueChart;
