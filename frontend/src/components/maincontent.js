import React from "react";
import Header from "./header";
import StatusSection from "./statussection";

const MainContent = () => {
  const projectData = {
    Backlog: [
      {
        priority: "Medium",
        title: "Brainstorming",
        description: "Brainstorming brings team members' diverse experience into play.",
        users: 2,
        comments: 14,
        files: 15,
      },
    ],
    Pending: [
      {
        priority: "Low",
        title: "Assets Version 1",
        description: "Assets are being prepared.",
        users: 3,
        comments: 10,
        files: 5,
      },
    ],
  };

  return (
    <main className="flex-1 p-6 bg-gray-100">
      <Header />
      <div className="flex space-x-4 overflow-x-auto">
        {Object.entries(projectData).map(([status, projects]) => (
          <StatusSection key={status} status={status} projects={projects} />
        ))}
      </div>
    </main>
  );
};

export default MainContent;
