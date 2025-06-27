import React from "react";
import { EllipsisVertical } from "lucide-react";

const categories = [
  { image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOh2zmoWUF9K7qg8rnWosjImdjA6pfeihTfQ&s ", name: "Slim Fit", price: "₹1509", growth: "+12%" },
  {  name: "Regular Fit", price: "₹1406", growth: "+0%" },
  {  name: "Relaxed Fit", price: "₹1406", growth: "+0%" },
  {  name: "Skinny Fit", price: "₹982", growth: "+19%" },
  {  name: "Taperred Fit", price: "₹791", growth: "+0%" },
  {  name: "Straight Fit", price: "₹679", growth: "+11%" },
  {  name: "Bootcut", price: "₹679", growth: "+11%" },
];

const TopSalesCategory = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow w-full">
      <div className="flex flex-row justify-between">
        <h1 className="text-lg font-bold mb-2">Top Sales Categories</h1>
        <EllipsisVertical />
      </div>
      <p className="pb-3">Top Sales Categories This Month</p>
      <ul className="space-y-2">
        {categories.map((cat, i) => (
          <li key={i} className="flex flex-wrap items-center justify-between gap-2 p-1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOh2zmoWUF9K7qg8rnWosjImdjA6pfeihTfQ&s" alt="image" height={50} width={50} className="rounded object-cover"/>
            <span className="font-bold truncate">{cat.name}</span>
            <span className="font-bold">{cat.price}</span>
            <span
              className={`${
                cat.growth === "+0%"
                  ? "bg-gray-500 rounded-3xl p-1.5 text-center"
                  : "bg-green-500 rounded-3xl p-1.5"
              }`}
            >
              {cat.growth}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSalesCategory;
