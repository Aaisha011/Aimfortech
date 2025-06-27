import React, { useState } from "react";

const menus = [
  "Dashboard",
  "User List",
  "Product Management",
  "Inventory Management",
  "Warehouse Management",
  "Sale",
  "Lorem ipsum",
];

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden" onClick={onClose}></div>
      )}
      <div
        className={`
          fixed z-40 top-0 left-0 h-screen w-56 bg-white shadow p-4 space-y-2 transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:static md:translate-x-0 md:block min-w-[200px] lg:sticky
        `}
      >
        {/* Close button for mobile */}
        <div className="flex justify-end md:hidden mb-4">
          <button onClick={onClose} className="text-2xl font-bold">&times;</button>
        </div>
        {menus.map((menu, index) => (
          <div key={index} className="p-2 hover:bg-red-500 hover:scale-105 cursor-pointer rounded ">
            {menu}
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
