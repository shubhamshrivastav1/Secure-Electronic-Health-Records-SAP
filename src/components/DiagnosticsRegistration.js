import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/DoctorRegistration.css";
import NavBar from "./NavBar";

const DiagnosticRegistry = () => {
  const [diagnosticAddress, setDiagnosticAddress] = useState("");
  const [diagnosticName, setDiagnosticName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [diagnosticLocation, setDiagnosticLocation] = useState("");
  const [hhNumber, sethhNumber] = useState("");
  const [hhNumberError, sethhNumberError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    // Validation checks
    if (!diagnosticAddress || !diagnosticName || !hospitalName || !diagnosticLocation || !email || !hhNumber || !password || !confirmPassword) {
      alert("You have missing input fields. Please fill in all the required fields.");
      return;
    }

    if (password.length < 8) {
      setPassword("");
      setConfirmPassword("");
      setPasswordError("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPassword("");
      setConfirmPasswordError("Passwords do not match.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");

    // Mock registration success
    alert("Diagnostic registered successfully (mock)!");
    navigate("/");
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  };

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

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError("");
  };

  const cancelOperation = () => {
    navigate("/");
  };

  return (
    <div>
      <NavBar />
      <div className="createehr min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-black to-gray-800 font-mono">
        <div className="w-full max-w-2xl">
          <h2 className="text-3xl text-white mb-6 font-bold text-center">Diagnostic Registration</h2>
          <form className="bg-gray-900 p-6 rounded-lg shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <label className="block font-bold text-white" htmlFor="diagnosticAddress">Wallet Public Address</label>
              <input
                id="diagnosticAddress"
                name="diagnosticAddress"
                type="text"
                required
                className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200"
                placeholder="Crypto Wallet Public Address"
                value={diagnosticAddress}
                onChange={(e) => setDiagnosticAddress(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold text-white" htmlFor="diagnosticName">Diagnostic Center Name</label>
              <input
                id="diagnosticName"
                name="diagnosticName"
                type="text"
                required
                className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200"
                placeholder="Enter Diagnostic Center Name"
                value={diagnosticName}
                onChange={(e) => setDiagnosticName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold text-white" htmlFor="hospitalName">Hospital Name</label>
              <input
                id="hospitalName"
                name="hospitalName"
                type="text"
                required
                className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200"
                placeholder="Enter Hospital Name"
                value={hospitalName}
                onChange={(e) => setHospitalName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold text-white" htmlFor="diagnosticLocation">Location</label>
              <input
                id="diagnosticLocation"
                name="diagnosticLocation"
                type="text"
                placeholder="Location of Diagnostic Center"
                className="mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200"
                value={diagnosticLocation}
                onChange={(e) => setDiagnosticLocation(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold text-white" htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                className={`mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200 ${emailError ? "border-red-500" : ""}`}
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>
            <div className="mb-4">
              <label className="block font-bold text-white" htmlFor="hhNumber">HH Number (6 digit pin)</label>
              <input
                id="hhNumber"
                name="hhNumber"
                type="text"
                className={`mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200 ${hhNumberError ? "border-red-500" : ""}`}
                placeholder="6-digit HH Number"
                value={hhNumber}
                onChange={handlehhNumberChange}
              />
              {hhNumberError && <p className="text-red-500 text-sm mt-1">{hhNumberError}</p>}
            </div>
            <div className="mb-4">
              <label className="block font-bold text-white" htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                className={`mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200 ${passwordError ? "border-red-500" : ""}`}
                placeholder="Password (min 8 char)"
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
            </div>
            <div className="mb-4">
              <label className="block font-bold text-white" htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className={`mt-2 p-2 w-full text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-800 transition duration-200 ${confirmPasswordError ? "border-red-500" : ""}`}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              {confirmPasswordError && <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>}
            </div>
          </form>
          <div className="space-x-4 text-center mt-6">
            <button onClick={handleRegister} className="py-3 px-6 bg-teal-500 text-white rounded-md hover:bg-gray-600">
              Register
            </button>
            <button onClick={cancelOperation} className="py-3 px-6 bg-teal-500 text-white rounded-md hover:bg-gray-600">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticRegistry;
