import React from 'react';
import logo from "../assets/logo.png";
import signin from "../assets/Signin.png";

function App() {
    return (
        <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#87A7D0' }}>
            <div className="flex flex-col md:flex-row bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg p-8 md:w-3/4 lg:w-2/3 border border-blue-300">
                {/* Left Section - Card Container */}
                <div className="flex flex-col w-full md:w-1/2 bg-white rounded-xl shadow-md p-8 border border-gray-300">
                    <div className="text-center mb-6">
                        {/* Logo */}
                        <img src={logo} alt="Kollabora logo" style={{ width: "139px", height: "32px" }} />
                        {/* Sign-in Text */}
                        <h1 className="text-2xl font-semibold text-gray-800 mt-4">Sign in</h1>
                    </div>
                    <form className="space-y-4">
                        {/* Email Text and Input Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="Example@email.com"
                                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        {/* Password Text and Input Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                placeholder="At least 8 characters"
                                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded -md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        {/* Forgot Password Link */}
                        <div className="text-right">
                            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
                        </div>
                        {/* Sign In Button */}
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-pink-400 text-white font-semibold rounded-md shadow-md hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                        >
                            Sign in
                        </button>
                        {/* Google Sign-In Button */}
                        <button
                            type="button"
                            className="w-full py-2 px-4 bg-white border border-gray-300 text-gray-700 font-semibold rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center justify-center"
                        >
                            <i className="fab fa-google mr-2"></i> Sign in with Google
                        </button>
                    </form>
                    {/* Sign-Up Link */}
                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-700">
                            No account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
                        </p>
                    </div>
                </div>

                {/* Right Section - Illustration */}
                <div className="hidden md:flex items-center justify-center w-full md:w-1/2 px-4">
                    <img
                        src={signin}
                        alt="Illustration of a hand interacting with a digital dashboard"
                        style={{ width: "1078px", height: "900px" }}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
            {/* Footer */}
            <footer className="absolute bottom-4 text-center text-sm text-gray-600 w-full">
                &copy; 2024 Kollabora
            </footer>
        </div>
    );
}

export default App;