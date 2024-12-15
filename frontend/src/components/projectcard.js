import React from "react";

const ProjectCard = ({ priority, title, description, users, comments, files }) => {
  const priorityColors = {
    High: "text-red-600",
    Medium: "text-yellow-600",
    Low: "text-green-600",
  };

  return (
    <div className="bg-pink-100 p-4 rounded-md mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className={`text-sm font-bold ${priorityColors[priority]}`}>
          {priority}
        </span>
        <i className="fas fa-ellipsis-h text-gray-400"></i>
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-2">
          <i className="fas fa-user-friends text-gray-400"></i>
          <span className="text-sm text-gray-600">{users}</span>
        </div>
        <div className="flex items-center space-x-2">
          <i className="fas fa-comments text-gray-400"></i>
          <span className="text-sm text-gray-600">{comments}</span>
        </div>
        <div className="flex items-center space-x-2">
          <i className="fas fa-file text-gray-400"></i>
          <span className="text-sm text-gray-600">{files}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
