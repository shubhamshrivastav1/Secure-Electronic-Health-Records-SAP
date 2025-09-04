import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/DoctorLoginPage.css";
import NavBar from "./NavBar";

const DiagnosticLogin = () => {
  const navigate = useNavigate();
  const [hhNumberError, sethhNumberError] = useState("");
  const [hhNumber, sethhNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlehhNumberChange = (e) => {
    const inputhhNumber = e.target.value;
    const phoneRegex = /^\d{6}$/;
    if (phoneRegex.test(inputhhNumber)) {
      sethhNumber(inputhhNumber);
      sethhNumberError("");
    } else {
      sethhNumber(inputhhNumber);
      sethhNumberError("Please enter a 6-digit HH Number.");
    }
  };

  const handleLogin = () => {
    // Replace blockchain verification with simple mock check
    if (hhNumber === "123456" && password === "password") {
      navigate(`/diagnostic/${hhNumber}`);
    } else if (!hhNumberError) {
      alert("Invalid HH Number or Password");
    } else {
      alert(hhNumberError);
    }
  };

  const cancelOperation = () => {
    navigate("/");
  };

  return (
    <div>
      <NavBar />
      <div className="bg-gradient-to-b from-black to-gray-800 min-h-screen flex flex-col justify-center items-center p-4 font-mono text-white">
        <div className="w-full max-w-4xl bg-gray-900 p-20 rounded-lg shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Diagnostic Login</h2>
          <div className="mb-4">
            <label className="block font-bold text-white" htmlFor="hhNumber">
              HH Number (6 digit pin)
            </label>
            <input
              id="hhNumber"
              name="hhNumber"
              type="text"
              required
              className={`mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition ${hhNumberError ? "border-red-500" : ""}`}
              placeholder="Enter 6-digit HH Number"
              value={hhNumber}
              onChange={handlehhNumberChange}
            />
            {hhNumberError && <p className="text-red-500 text-sm mt-1">{hhNumberError}</p>}
          </div>
          <div className="flex flex-col w-full mb-4">
            <label className="mb-2 font-bold">Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition"
              required
            />
          </div>
          <div className="space-x-4 text-center mt-6">
            <button
              onClick={handleLogin}
              className="px-6 py-3 bg-teal-500 text-white font-bold text-lg rounded-lg cursor-pointer transition-transform transition-colors duration-300 ease-in hover:bg-teal-600 active:bg-teal-700"
            >
              Login
            </button>
            <button
              onClick={cancelOperation}
              className="px-6 py-3 bg-teal-500 text-white font-bold text-lg rounded-lg cursor-pointer transition-transform transition-colors duration-300 ease-in hover:bg-teal-600 active:bg-teal-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticLogin;
