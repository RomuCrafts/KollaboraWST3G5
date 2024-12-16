import React from "react";
import Sidebar from "../components/sidebar";
import "tailwindcss/tailwind.css";

const ProjReports = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Hi, Admin!</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
            <i className="fas fa-bell text-gray-400"></i>
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Gantt Chart | Completion%</h2>
          <img
            src="https://placehold.co/600x300"
            alt="Gantt Chart showing task completion percentages"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjReports;
