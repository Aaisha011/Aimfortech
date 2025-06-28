import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SummaryCard from "../components/SummaryCard";
import { summaryCards } from "../data/dummy-data";
import RevenueChart from "../components/RevenueChart";
import StatisticsChart from "../components/StatisticsChart";
// import InvoiceStatusChart from "../components/InvoiceStatusChart";
import InvoiceStatuschart from "../components/InvoiceStatuschart"
import TopProductList from "../components/TopProductList";
import TopSalesCategory from "../components/TopSalesCategory";
import RecentOrders from "../components/RecentOrders";
import WarehouseMap from "../components/WareHouseMap";
import { Menu } from "lucide-react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar and overlay */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {/* Mobile menu button */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-white p-2 rounded shadow"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <Menu size={28} />
      </button>
      <div className="flex-1 p-2 sm:p-4 max-w-screen-2xl mx-auto w-full">
        <Header />

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {summaryCards.map((card, idx) => (
            <SummaryCard key={idx} {...card} />
          ))}
        </div>

        {/* Revenue & Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
          <RevenueChart />
          <StatisticsChart />
        </div>

        {/* Invoice, Top Products, Top Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {/* <InvoiceStatusChart /> */}
          <InvoiceStatuschart/>
          <TopProductList />
          <TopSalesCategory />
        </div>

        {/* Recent Orders & Warehouse Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <RecentOrders />
          <WarehouseMap />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
