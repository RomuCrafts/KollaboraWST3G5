// pages/UserProj.js
import React from "react";
import Sidebar from "../components/sidebar";
import ProjectCard from "../components/projectcard";

const UserProj = () => {
  const projects = [
    {
      priority: "High",
      title: "Project Alpha",
      description: "A project focused on improving the user experience.",
      users: 5,
      comments: 12,
      files: 3,
    },
    {
      priority: "Medium",
      title: "Project Beta",
      description: "A project aimed at enhancing the security features.",
      users: 8,
      comments: 22,
      files: 5,
    },
    {
      priority: "Low",
      title: "Project Gamma",
      description: "A project working on backend performance optimization.",
      users: 3,
      comments: 7,
      files: 1,
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Projects</h1>
          <div className="flex items-center">
            <div className="relative mr-4">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-200 rounded-full py-2 px-4 pl-10 focus:outline-none"
              />
              <span className="absolute left-3 top-2.5 text-gray-500">🔍</span>
            </div>
          </div>
        </header>

        {/* Display Project Cards */}
        <section>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              priority={project.priority}
              title={project.title}
              description={project.description}
              users={project.users}
              comments={project.comments}
              files={project.files}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default UserProj;
