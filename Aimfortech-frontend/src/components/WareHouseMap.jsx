import React from "react";
import { EllipsisVertical } from "lucide-react";

const Data = [
  { name: "Bhopal", products: "1240 Products", percent: "80%" },
  { name: "Indore", products: "1240 Products", percent: "60%" },
  { name: "Jabalpur", products: "1240 Products", percent: "49%" },
  { name: "Dewas", products: "1240 Products", percent: "100%" },
  { name: "Ratlam", products: "1240 Products", percent: "50%" },
];

const WarehouseMap = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow w-{30%}">
      <div className="flex flex-row justify-between">
        <h1 className="text-lg font-bold mb-2">Warehouse Management</h1>
        <EllipsisVertical />
      </div>
      <p className="text-sm">Location</p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78trGgVlbwz3ayPFjgQtqSKDKKg9Wt6vyeA&s"
        alt="India map"
        width={300}
      />
      {Data.map((data, i) => (
        <div key={i} className="mb-3 flex fkex-row justify-between">
          <div className="flex flex-col justify-between">
            <span>{data.name}</span>
            <span className="text-sm">{data.products}</span>
          </div>
          <div className="w-30 bg-gray-200 h-2 rounded mt-1 flex flex-row justify-between ">
            <div
              className={` ${data.percent === "100%" ? "bg-purple-500" : data.percent === "50%" ? "bg-gray-500" : data.percent === "60%" ? "bg-orange-500" : "bg-gray-500"} h-2 rounded`}
              style={{ width: `${data.percent}` }}
            ></div>
            <p className="p-3">{data.percent}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WarehouseMap;
