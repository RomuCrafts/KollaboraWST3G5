import React from 'react';
import logo from "../assets/logo.png";
import signin from "../assets/Signin.png";

function App() {
    return (
        <div
            className="flex items-center justify-center min-h-screen"
            style={{ backgroundColor: '#B3CCE6', position: 'relative' }}
        >
            {/* Card Wrapper */}
            <div
                className="bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg p-6 border border-blue-400 flex flex-col md:flex-row"
                style={{ maxWidth: '900px', width: '90%' }}
            >
                {/* Left Section - Sign-in Form */}
                <div className="flex flex-col w-full md:w-1/2 p-8">
                    <div className="text-center mb-6">
                        {/* Logo */}
                        <img src={logo} alt="Kollabora logo" style={{ width: "140px" }} />
                        {/* Sign-in Text */}
                        <h1 className="text-2xl font-bold text-gray-800 mt-4">Sign in</h1>
                    </div>
                    <form className="space-y-4">
                        {/* Email Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="Example@email.com"
                                className="mt-1 block w-full px-4 py-2 bg-white bg-opacity-80 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        {/* Password Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                placeholder="At least 8 characters"
                                className="mt-1 block w-full px-4 py-2 bg-white bg-opacity-80 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        {/* Forgot Password */}
                        <div className="text-right">
                            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
                        </div>
                        {/* Sign-in Button */}
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-pink-400 text-white font-semibold rounded-md shadow-md hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                        >
                            Sign in
                        </button>
                        {/* Google Sign-in Button */}
                        <button
                            type="button"
                            className="w-full py-2 px-4 bg-white border border-gray-300 text-gray-700 font-semibold rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center justify-center"
                        >
                            <i className="fab fa-google mr-2"></i> Sign in with Google
                        </button>
                    </form>
                    {/* Sign-up Link */}
                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-700">
                            No account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
                        </p>
                    </div>
                </div>

                {/* Right Section - Illustration */}
                <div className="hidden md:flex items-center justify-center w-full md:w-1/2 p-4">
                    <img
                        src={signin}
                        alt="Illustration of a hand interacting with a digital dashboard"
                        className="rounded-lg"
                        style={{ maxWidth: '100%', height: 'auto' }}
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
