import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login;