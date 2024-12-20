import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import AdminDash from "./pages/AdminDash";
import UserProj from "./pages/UserProj";
import ProjectCard from "./components/projectcard";
import MemberTable from "./pages/MemberTable";
import Task from "./pages/Task";
import ProjReports from "./pages/ProjReports";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Routes>
          {/* Define unique paths for each component */}
          <Route path="/" element={<SignIn />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/AdminDash" element={<AdminDash />} />
          <Route path="/UserProj" element={<UserProj />} />
          <Route path="/projectcard" element={<ProjectCard />} />
          <Route path="/MemberTable" element={<MemberTable />} />
          <Route path="/Task" element={<Task />} />
          <Route path="/ProjReports" element={<ProjReports />} />
        </Routes>
      </Router>
    </DndProvider>
  );
}

export default App;
