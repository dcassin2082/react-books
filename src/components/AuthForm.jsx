import React, { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
    setErrorMessage(""); // Clear any previous errors on input change
    setSuccessMessage(""); // Clear any previous success messages
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Fake Login Logic
      if (username === "testuser" && password === "password") {
        setSuccessMessage("Login successful!");
        // In a real app, you'd handle authentication and redirect here
        console.log("Fake Login Successful:", { username, password });
      } else {
        setErrorMessage("Invalid username or password.");
      }
    } else {
      // Fake Registration Logic
      if (!username || !password) {
        setErrorMessage("Please enter a username and password.");
        return;
      }
      if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match.");
        return;
      }
      if (password.length < 6) {
        setErrorMessage("Password must be at least 6 characters long.");
        return;
      }
      setSuccessMessage("Registration successful! You can now log in.");
      setIsLogin(true); // Switch to login form after successful registration
      console.log("Fake Registration Successful:", { username, password });
      // In a real app, you'd handle user creation and potentially automatic login
      setUsername("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setErrorMessage("");
    setSuccessMessage("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl text-slate-800 font-semibold mb-4">
        {isLogin ? "Login" : "Register"}
      </h2>
      {errorMessage && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-3"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline">{errorMessage}</span>
        </div>
      )}
      {successMessage && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-3"
          role="alert"
        >
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline">{successMessage}</span>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-slate-600 text-sm font-bold mb-2"
          >
            Username: <span className="font-light">(testuser)</span>
          </label>
          <input
            style={{ backgroundColor: "#fff" }}
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleInputChange}
            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-slate-600 text-sm font-bold mb-2"
          >
            Password: <span className="font-light">(password)</span>
          </label>
          <input
            style={{ backgroundColor: "#fff" }}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
            required
          />
        </div>
        {!isLogin && (
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-slate-600 text-sm font-bold mb-2"
            >
              Confirm Password: <span className="font-light">(password)</span>
            </label>
            <input
              style={{ backgroundColor: "#fff" }}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleInputChange}
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Confirm your password"
              required
            />
          </div>
        )}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {isLogin ? "Login" : "Register"}
          </button>
          <button
            type="button"
            className="inline-block align-baseline font-semibold "
            onClick={switchMode}
          >
            {isLogin
              ? "Need an account? Register"
              : "Already have an account? Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
