import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import signin from "../assets/Signin.png";

const SignIn = () => {
    const navigate = useNavigate();

    return (
        <div
            className="flex items-center justify-center min-h-screen"
            style={{ backgroundColor: "#B3CCE6", position: "relative" }}
        >
            <div
                className="bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg p-6 border border-blue-400 flex flex-col md:flex-row"
                style={{ maxWidth: "900px", width: "90%" }}
            >
                <div className="flex flex-col w-full md:w-1/2 p-8">
                    <div className="text-center mb-6">
                        <img src={logo} alt="Kollabora logo" style={{ width: "140px" }} />
                        <h1 className="text-2xl font-bold text-gray-800 mt-4">Sign in</h1>
                    </div>
                    <form
                        className="space-y-4"
                        onSubmit={(e) => {
                            e.preventDefault(); // Prevent form from reloading the page
                            navigate("/AdminDash"); // Navigate to AdminDash
                        }}
                    >
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="Example@email.com"
                                className="mt-1 block w-full px-4 py-2 bg-white bg-opacity-80 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                placeholder="At least 8 characters"
                                className="mt-1 block w-full px-4 py-2 bg-white bg-opacity-80 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div className="text-right">
                            <a href="#" className="text-sm text-blue-600 hover:underline">
                                Forgot Password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-pink-400 text-white font-semibold rounded-md shadow-md hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                        >
                            Sign in
                        </button>
                    </form>
                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-700">
                            No account?{" "}
                            <button
                                className="text-blue-600 hover:underline"
                                onClick={() => navigate("/Signup")}
                            >
                                Sign up
                            </button>
                        </p>
                    </div>
                </div>
                <div className="hidden md:flex items-center justify-center w-full md:w-1/2 p-4">
                    <img
                        src={signin}
                        alt="Illustration of a hand interacting with a digital dashboard"
                        className="rounded-lg"
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </div>
            </div>
            <footer className="absolute bottom-4 text-center text-sm text-gray-600 w-full">
                &copy; 2024 Kollabora
            </footer>
        </div>
    );
};

export default SignIn;
