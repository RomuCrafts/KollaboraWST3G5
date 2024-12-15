import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import signuplogo from "../assets/signuplogo.png";
import { register } from "../services/auth";
import axios from "axios";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log(e.target);

    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register/", {
        username,
        email,
        password,
      });
      alert("User registered successfully!");
      console.log("Registration response:", response.data);
    } catch (error) {
      console.error("Registration error:", error.response?.data || error);
      setErrorMessage(
        error.response?.data?.error || "An error occurred during registration."
      );
    }
  };

  const navigate = useNavigate(); // Hook to handle navigation

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: "#F9E3E3", position: "relative" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl w-full p-4">
        {/* Left Section: Image */}
        <div className="flex-shrink-0 md:mr-8">
          <img
            src={signuplogo}
            alt="3D Illustration of Laptop with Charts"
            className="max-w-lg w-full"
            style={{ width: "1128px", height: "auto" }}
          />
        </div>

        {/* Right Section: Form */}
        <div
          className="p-8 rounded-lg shadow-lg w-full max-w-md"
          style={{
            backgroundColor: "#71797E",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="text-center mb-6">
            <img
              src={logo}
              alt="Kollabora Logo"
              className="mx-auto mb-4"
              style={{ maxWidth: "150px" }}
            />
            <h2 className="text-2xl font-bold text-white">Sign up</h2>
          </div>

          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-white mb-2">Full Name</label>
              <input
                type="text"
                placeholder="First Last"
                className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2">Password</label>
              <input
                type="password"
                placeholder="At least 8 characters"
                className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2">Confirm Password</label>
              <input
                type="password"
                name="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
              />
            </div>
            <div className="mb-4 flex items-start">
              <input
                type="checkbox"
                className="mt-1 mr-2 h-4 w-4 text-blue-500 rounded"
              />
              <label className="text-white text-sm leading-5">
                I agree to the{" "}
                <a href="#" className="text-blue-400 hover:underline">
                  Terms and Conditions
                </a>{" "}
                and the{" "}
                <a href="#" className="text-blue-400 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition duration-200"
            >
              Sign up
            </button>
            {errorMessage && <p>{errorMessage}</p>}
          </form>
          <div className="text-center mt-4">
            <p className="text-white">
              Have an account?{" "}
              <button
                className="text-blue-400 underline hover:text-blue-300"
                onClick={() => navigate("/")}
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>

      <footer className="absolute bottom-4 text-center text-sm text-gray-600 w-full">
        &copy; 2024 Kollabora
      </footer>
    </div>
  );
};

export default SignUp;
