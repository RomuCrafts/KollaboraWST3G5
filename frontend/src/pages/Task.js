import React from 'react';
import Sidebar from '../components/sidebar';
import TaskList from '../components/TaskList';

const Task = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Hi, Name!</h1>
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
            <img
              src="https://placehold.co/40x40"
              alt="User avatar"
              className="rounded-full"
            />
          </div>
        </header>

        <TaskList
          title="Brainstorming"
          tasks={[
            {
              task: "Think of a Name",
              date: "Dec 3, 2024",
              progress: "0%",
              members: 3,
              status: "Not Started",
              statusColor: "bg-gray-300",
            },
            {
              task: "Dashboarding",
              date: "Dec 3, 2024",
              progress: "50%",
              members: 4,
              status: "In Progress",
              statusColor: "bg-blue-500",
            },
            {
              task: "Templates",
              date: "Dec 7, 2024",
              progress: "50%",
              members: 3,
              status: "Stuck",
              statusColor: "bg-red-500",
            },
            {
              task: "Color Theory",
              date: "Dec 6, 2024",
              progress: "100%",
              members: 2,
              status: "Done",
              statusColor: "bg-green-500",
            },
          ]}
        />
        
        <TaskList
          title="Brainstorming"
          tasks={[
            {
              task: "Naming Scheme",
              date: "Dec 14, 2024",
              progress: "50%",
              members: 4,
              status: "Working on it",
              statusColor: "bg-yellow-500",
            },
            {
              task: "Automation",
              date: "Dec 9, 2024",
              progress: "25%",
              members: 3,
              status: "In Progress",
              statusColor: "bg-blue-500",
            },
            {
              task: "Call a Meeting",
              date: "Dec 11, 2024",
              progress: "0%",
              members: 4,
              status: "Stuck",
              statusColor: "bg-red-500",
            },
          ]}
        />
      </main>
    </div>
  );
};

export default Task;
