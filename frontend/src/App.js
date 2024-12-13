import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/Signup';
import AdminDash from './pages/AdminDash';


function App() {
    return (
        <Router>
            <Routes>
                {/* Define unique paths for each component */}
                <Route path="/" element={<SignIn />} />
                <Route path="/Signup" element={<SignUp />} />
                <Route path='/AdminDash' element={<AdminDash/>} />
            </Routes>
        </Router>
    );
}

export default App;
