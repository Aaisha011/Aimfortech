import { ChevronLeft, ChevronRight, EyeIcon, SlidersHorizontal, Trash2, Calendar } from "lucide-react";
import React from "react";

const orders = [
  {
    product: "Men's White T-Shirt",
    qty: "500",
    customer: "John Doe",
    email: "john@example.com",
    total: "₹1000",
    status: "Processing",
  },
  {
    product: "Men's White T-Shirt",
    qty: "600",
    customer: "Jane Smith",
    email: "john@example.com",
    total: "₹1500",
    status: "Shipped",
  },
  {
    product: "Men's White T-Shirt",
    qty: "600",
    customer: "Bob Brown",
    email: "bob@example.com",
    total: "₹2000",
    status: "Delivered",
  },
  {
    product: "Men's White T-Shirt",
    qty: "600",
    customer: "Bob Brown",
    email: "bob@example.com",
    total: "₹2000",
    status: "Delivered",
  },
  {
    product: "Men's White T-Shirt",
    qty: "600",
    customer: "Bob Brown",
    email: "bob@example.com",
    total: "₹2000",
    status: "Delivered",
  },
];

const RecentOrders = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow w-full overflow-x-auto">
      <div className="flex flex-row justify-between">
        <h3 className="text-md font-semibold mb-2">Recent Orders</h3>
        <div className="flex flex-row p-1">
          <span className="text-gray-500 m-1 flex flex-row bg-gray-300/50 p-1  border-gray-100 border-1 rounded-md"><Calendar />Select date</span>
          <span className="text-gray-500 m-1 flex flex-row bg-gray-300/50 p-1  border-gray-100 border-1 rounded-md"><SlidersHorizontal />
            Filters</span>
          <span className="text-red-500 m-1 flex flex-row bg-red-300/50 p-1  border-gray-100 border-1 rounded-md">See All</span>
        </div>
      </div>
      <table className="min-w-[700px] text-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-3">PRODUCT</th>
            <th className="text-left p-3">CUSTOMER</th>
            <th className="text-left p-3">TOTAL</th>
            <th className="text-left p-3">STATUS</th>
            <th className="text-left p-3">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o, i) => (
            <tr key={i} className="text-left">
              <td className="p-2">
                <div className="flex flex-col">
                  <span>{o.product}</span>
                  <span className="text-sm text-gray-500">Qty: {o.qty}</span>
                </div>
              </td>
              <td className="p-2">
                <div className="flex flex-col">
                  <span>{o.customer}</span>
                  <span className="text-sm text-gray-500">{o.email}</span>
                </div>
              </td>
              <td className="p-2">{o.total}</td>
              <td className="p-2">
                <span
                  className={`px-2 py-1 rounded-3xl font-semibold
            ${o.status === "Delivered"
                      ? "bg-green-500/50 text-green-700"
                      : o.status === "Processing"
                        ? "bg-blue-500/50 text-blue-700"
                        : "bg-yellow-500/50 text-yellow-700"
                    }`}
                >
                  {o.status}
                </span>
              </td>
              <td className="p-2">
                <ul className="flex flex-row space-x-2">
                  <li className="text-blue-900"><EyeIcon /></li>
                  <li className="text-red-900"><Trash2 /></li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-col sm:flex-row justify-between mt-4 gap-2">
        <p>Showing 1-5 from 100</p>
        <ul className="flex flex-row space-x-1">
          <li className="bg-red-700 rounded-md p-1"><ChevronLeft /></li>
          <li className="bg-red-700 rounded-md p-1">1</li>
          <li className="bg-red-700 rounded-md p-1">2</li>
          <li className="bg-red-700 rounded-md p-1">3</li>
          <li className="bg-red-700 rounded-md p-1">...</li>
          <li className="bg-red-700 rounded-md p-1"><ChevronRight /></li>
        </ul>
      </div>
    </div>
  );
};

export default RecentOrders;
