import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      Email: email,
      Password: password,
    });
  };
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white w-full max-w-md rounded-lg p-8 ">
        <h2 className="font-semibold text-2xl">Sign In</h2>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label>Email: </label>
            <input
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border px-2 py-2 outline-none mt-1 rounded w-full"
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border px-2 py-2 outline-none mt-1 rounded w-full"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-400 hover:bg-blue-600 text-white mt-2 rounded-2xl cursor-pointer"
          >
            Sign in
          </button>
        </form>

        <p className="text-center mt-2">
            Don't have an account ?
            <Link to="/signup" className="underline hover:text-blue-400"> Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
