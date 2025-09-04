import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/DoctorRegistration.css";
import NavBar from "./NavBar";

const DoctorRegistry = () => {
  const [doctorAddress, setDoctorAddress] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [hospitalLocation, setHospitalLocation] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [hhNumber, sethhNumber] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!doctorName) newErrors.doctorName = "Doctor Name is required";
    if (!doctorAddress) newErrors.doctorAddress = "Address is required";
    if (!hospitalName) newErrors.hospitalName = "Hospital Name is required";
    if (!hospitalLocation) newErrors.hospitalLocation = "Hospital Location is required";
    if (!dateOfBirth) newErrors.dateOfBirth = "Date of Birth is required";
    if (!gender) newErrors.gender = "Gender is required";
    if (!email) newErrors.email = "Email is required";
    if (!hhNumber || hhNumber.length !== 6) newErrors.hhNumber = "Enter valid 6-digit HH Number";
    if (!specialization) newErrors.specialization = "Specialization required";
    if (!department) newErrors.department = "Department required";
    if (!designation) newErrors.designation = "Designation required";
    if (!workExperience) newErrors.workExperience = "Work Experience required";
    if (!password || password.length < 8) newErrors.password = "Password must be at least 8 characters";
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert("Doctor registered successfully! (mock)");
    navigate("/");
  };

  const cancelOperation = () => navigate("/");

  return (
    <div>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-black to-gray-900 font-mono">
        <div className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl text-white mb-8 font-bold text-center">
            Doctor Registration
          </h2>
          <form
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            onSubmit={handleRegister}
          >
            {/* Full Name */}
            <div>
              <label className="block text-gray-300 mb-1">Full Name</label>
              <input
                type="text"
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
                placeholder="Enter Full Name"
                className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500"
              />
              {errors.doctorName && <p className="text-red-500 text-sm">{errors.doctorName}</p>}
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-300 mb-1">Address</label>
              <input
                type="text"
                value={doctorAddress}
                onChange={(e) => setDoctorAddress(e.target.value)}
                placeholder="Enter Address"
                className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500"
              />
              {errors.doctorAddress && <p className="text-red-500 text-sm">{errors.doctorAddress}</p>}
            </div>

            {/* Hospital Name */}
            <div>
              <label className="block text-gray-300 mb-1">Hospital Name</label>
              <input
                type="text"
                value={hospitalName}
                onChange={(e) => setHospitalName(e.target.value)}
                placeholder="Enter Hospital Name"
                className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500"
              />
              {errors.hospitalName && <p className="text-red-500 text-sm">{errors.hospitalName}</p>}
            </div>

            {/* Hospital Location */}
            <div>
              <label className="block text-gray-300 mb-1">Hospital Location</label>
              <input
                type="text"
                value={hospitalLocation}
                onChange={(e) => setHospitalLocation(e.target.value)}
                placeholder="Enter Location"
                className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500"
              />
              {errors.hospitalLocation && <p className="text-red-500 text-sm">{errors.hospitalLocation}</p>}
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-gray-300 mb-1">Date of Birth</label>
              <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500"
              />
              {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>}
            </div>

            {/* Gender */}
            <div>
              <label className="block text-gray-300 mb-1">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
            </div>

            {/* HH Number */}
            <div>
              <label className="block text-gray-300 mb-1">HH Number (6 digit pin)</label>
              <input
                type="text"
                value={hhNumber}
                onChange={(e) => sethhNumber(e.target.value)}
                placeholder="Enter HH Number (6 digit pin)"
                className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500"
              />
              {errors.hhNumber && <p className="text-red-500 text-sm">{errors.hhNumber}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Specialization */}
            <div>
              <label className="block text-gray-300 mb-1">Specialization</label>
              <input
                type="text"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                placeholder="Enter Specialization"
                className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500"
              />
              {errors.specialization && <p className="text-red-500 text-sm">{errors.specialization}</p>}
            </div>

            {/* Department */}
            <div>
              <label className="block text-gray-300 mb-1">Department</label>
              <input
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder="Enter Department"
                className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500"
              />
              {errors.department && <p className="text-red-500 text-sm">{errors.department}</p>}
            </div>

            {/* Designation */}
            <div>
              <label className="block text-gray-300 mb-1">Designation</label>
              <input
                type="text"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                placeholder="Enter Designation"
                className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500"
              />
              {errors.designation && <p className="text-red-500 text-sm">{errors.designation}</p>}
            </div>

            {/* Work Experience */}
            <div>
              <label className="block text-gray-300 mb-1">Work Experience</label>
              <input
                type="number"
                value={workExperience}
                onChange={(e) => setWorkExperience(e.target.value)}
                placeholder="Enter Years"
                className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500"
              />
              {errors.workExperience && <p className="text-red-500 text-sm">{errors.workExperience}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-300 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-300 mb-1">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
            </div>

            {/* Buttons */}
            <div className="col-span-2 text-center mt-4 space-x-4">
              <button
                type="submit"
                className="py-3 px-6 bg-teal-500 text-white rounded-md font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Register
              </button>
              <button
                type="button"
                onClick={cancelOperation}
                className="py-3 px-6 bg-gray-600 text-white rounded-md font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorRegistry;
