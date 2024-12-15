import React from "react";
import ProjectCard from "./projectcard";

const StatusSection = ({ status, projects }) => {
  return (
    <div className="bg-blue-900 text-white w-64 p-4 rounded-md">
      <h2 className="text-lg font-bold mb-4">{status}</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default StatusSection;
