import React from "react";
import "tailwindcss/tailwind.css";
import Sidebar from "../components/sidebar";
import { useNavigate } from "react-router-dom";

const AdminDash = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar /> {}
      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Hi, Admin!</h1>
          <div className="flex items-center">
            <div className="relative mr-4">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-200 rounded-full py-2 px-4 pl-10 focus:outline-none"
              />
              <span className="absolute left-3 top-2.5 text-gray-500">🔍</span>
            </div>
            <span className="text-gray-500 mr-4">🔔</span>
            <img
              src="https://placehold.co/40x40"
              alt="User avatar"
              className="rounded-full"
            />
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Project progress</h2>
          <img
            src="https://placehold.co/600x200"
            alt="Project progress chart"
            className="w-full rounded-lg"
          />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 text-white p-6 rounded-lg flex flex-col items-center justify-center">
            <h3 className="text-sm mb-2">Create a Project</h3>
            <span className="text-4xl text-blue-500">➕</span>
          </div>
          <div className="bg-gray-800 text-white p-6 rounded-lg flex flex-col items-center justify-center">
            <h3 className="text-sm mb-2">Create a Task</h3>
            <span className="text-4xl text-orange-500">➕</span>
          </div>
          <div className="bg-gray-800 text-white p-6 rounded-lg flex flex-col items-center justify-center">
            <h3 className="text-sm mb-2">Create a Member</h3>
            <span className="text-4xl text-green-500">➕</span>
          </div>
          <div className="bg-gray-800 text-white p-6 rounded-lg flex flex-col items-center justify-center">
            <h3 className="text-sm mb-2">Check a Project Report</h3>
            <span className="text-4xl text-pink-500">➕</span>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-900 text-white p-6 rounded-lg flex flex-col items-center justify-center">
            <h3 className="text-lg mb-2">Total Projects</h3>
            <p className="text-4xl text-pink-500">37</p>
          </div>
          <div className="bg-gray-900 text-white p-6 rounded-lg flex flex-col items-center justify-center">
            <h3 className="text-lg mb-2">Team Size</h3>
            <p className="text-4xl text-pink-500">64</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDash;
