import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/Signup';
import AdminDash from './pages/AdminDash';
import UserProj from './pages/UserProj';
import ProjectCard from './components/projectcard';
import MemberTable from './pages/MemberTable';

function App() {
    return (
        <Router>
            <Routes>
                {/* Define unique paths for each component */}
                <Route path="/" element={<SignIn />} />
                <Route path="/Signup" element={<SignUp />} />
                <Route path="/AdminDash" element={<AdminDash />} />
                <Route path="/UserProj" element={<UserProj />} />
                <Route path="/projectcard" element={<ProjectCard />} />
                <Route path="/MemberTable" element={<MemberTable/>} />
            </Routes>
        </Router>
    );
}

export default App;
