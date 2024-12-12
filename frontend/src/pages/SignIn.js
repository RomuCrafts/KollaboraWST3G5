import React from 'react';


function App() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-300">
            <div className="flex flex-col md:flex-row bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg p-8 md:w-3/4 lg:w-2/3 border border-blue-300">
                {/* Left Section - Sign In Form */}
                <div className="flex flex-col w-full md:w-1/2 px-4">
                    <div className="text-center mb-6">
                        <img src="https://placehold.co/100x50" alt="Kollabora logo" className="mx-auto mb-4" />
                        <h1 className="text-3xl font-bold text-gray-800">Sign in</h1>
                    </div>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="Example@email.com"
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                placeholder="At least 8 characters"
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div className="text-right">
                            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-pink-400 text-white font-semibold rounded-md shadow-md hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                        >
                            Sign in
                        </button>
                        <button
                            type="button"
                            className="w-full py-2 px-4 bg-white border border-gray-300 text-gray-700 font-semibold rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center justify-center"
                        >
                            <i className="fab fa-google mr-2"></i> Sign in with Google
                        </button>
                    </form>
                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-700">No account? <a href="#" className="text-blue-600 hover:underline">Sign up</a></p>
                    </div>
                </div>

                {/* Right Section - Illustration */}
                <div className="hidden md:flex items-center justify-center w-full md:w-1/2 px-4">
                    <img
                        src="https://placehold.co/400x400"
                        alt="Illustration of a hand interacting with a digital dashboard"
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