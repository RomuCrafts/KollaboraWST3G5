import React from 'react';

const TaskList = ({ title, tasks }) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-xl font-bold text-blue-500 mb-4">{title}</h2>
      <div className="space-y-4">
        {tasks.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`w-2 h-8 ${item.statusColor}`}></div>
              <span>{item.task}</span>
            </div>
            <span>{item.date}</span>
            <div className="w-1/4 bg-gray-200 rounded-full h-4">
              <div
                className={`h-4 rounded-full ${item.statusColor}`}
                style={{ width: item.progress }}
              ></div>
            </div>
            <div className="flex -space-x-2">
              {Array(item.members).fill().map((_, i) => (
                <img
                  key={i}
                  src="https://placehold.co/30x30"
                  alt="Member avatar"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <span className={`px-2 py-1 rounded-full text-white ${item.statusColor}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TaskList;
