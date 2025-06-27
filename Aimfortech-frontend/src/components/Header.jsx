import React from "react";

const Header = () => (
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-white shadow rounded mb-4 gap-2">
    <div>
      <h2 className="text-xl font-bold">Welcome Back Jay</h2>
      <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipiscing.</p>
    </div>
    <input placeholder="Select a date" type="date" className="border p-2 rounded w-full sm:w-auto" />
  </div>
);

export default Header;
