// components/Sidebar.js
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // Assuming you have the logo in assets

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="bg-gray-800 text-white w-64 p-6">
      <div className="flex items-center mb-8">
        <img src={logo} alt="Kollabora logo" className="mr-3" />
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <button
            onClick={() => navigate("/AdminDash")}
              href="#"
              className="flex items-center p-2 rounded hover:bg-gray-700"
            >
              <span className="mr-3">📊</span> Dashboard
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => navigate("/UserProj")}
              className="flex items-center p-2 rounded hover:bg-gray-700 w-full text-left"
            >
              <span className="mr-3">📂</span> Projects
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => navigate("/Task")} 
              className="flex items-center p-2 rounded hover:bg-gray-700"
            >
              <span className="mr-3">🗂️</span> Tasks
            </button>
          </li>
          <li className="mb-4">
        <button
            onClick={() => navigate("/membertable")} 
            className="flex items-center p-2 rounded hover:bg-gray-700 w-full text-left"
        >
        <span className="mr-3">👥</span> Members
        </button>
        </li>

          <li className="mb-4">
            <a
              href="#"
              className="flex items-center p-2 rounded hover:bg-gray-700"
            >
              <span className="mr-3">📑</span> Project Reports
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-auto">
        <button
        onClick={() => navigate("/SignIn")} 
          href="#"
          className="flex items-center p-2 text-pink-500 hover:text-pink-700"
        >
          <span className="mr-3">🚪</span> Log Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
