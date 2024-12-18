import React from "react";
import Sidebar from "../components/sidebar";

const MemberTable = () => {
  const members = [
    {
      name: "Herald Betelgeuse",
      email: "raldgeuse@gmail.com",
      mobile: "09344536234",
    },
    {
      name: "Cody Arnold Jr.",
      email: "codyoung@gmail.com",
      mobile: "09967436234",
    },
    {
      name: "Parkinson Law",
      email: "parkinson@gmail.com",
      mobile: "09456424543",
    },
    {
      name: "Cynthia Gettysberg",
      email: "cynthiag@gmail.com",
      mobile: "09143262465",
    },
    {
      name: "Cody Arnold Sr.",
      email: "codyold@gmail.com",
      mobile: "09745484575",
    },
    {
      name: "Schelle Turkinnerr",
      email: "schelnerr@gmail.com",
      mobile: "09524453234",
    },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar /> {}
      <main className="flex-1 p-6">
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-700">Members</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
              Add New
            </button>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-2">Name</th>
                <th className="py-2">Email</th>
                <th className="py-2">Mobile</th>
                <th className="py-2">Operation</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2 flex items-center">
                    <img
                      src="https://placehold.co/30x30"
                      alt={`Profile of ${member.name}`}
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    {member.name}
                  </td>
                  <td className="py-2">{member.email}</td>
                  <td className="py-2">{member.mobile}</td>
                  <td className="py-2 flex items-center">
                    <i className="fas fa-pen text-gray-500 hover:text-blue-500 cursor-pointer mr-3"></i>
                    <i className="fas fa-times text-gray-500 hover:text-red-500 cursor-pointer"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default MemberTable;
