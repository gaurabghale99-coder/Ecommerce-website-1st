import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password doesn't match...");
      return;
    }

    console.log({
      Username: name,
      Email: email,
      Password: password,
    });

    alert("Account created successfully!");
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg sm:p-8">
        <h2 className="text-2xl font-semibold text-center">Create account</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <div>
            <label>Full Name: </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-lg border px-2 py-2 outline-none"
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border px-2 py-2 outline-none"
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border px-2 py-2 outline-none"
            />
          </div>
          <div>
            <label>Confirm password: </label>
            <input
              type="password"
              placeholder="Enter your name"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border px-2 py-2 outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-600 cursor-pointer py-2 rounded-xl"
          >
            Sign up
          </button>
        </form>

        <p className="text-center mt-4">
            Already have an account?<br />
            <Link to="/signin" className="underline hover:text-blue-400">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
