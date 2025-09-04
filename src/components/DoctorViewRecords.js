import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar_Logout from "./NavBar_Logout";

const DoctorViewPatient = () => {
  const { hhNumber } = useParams();
  const navigate = useNavigate();

  const [patientDetails, setPatientDetails] = useState(null);

  useEffect(() => {
    // Mock patient data for demo
    const mockPatient = {
      name: "John Doe",
      dateOfBirth: "1990-01-01",
      gender: "Male",
      bloodGroup: "O+",
      homeAddress: "123 Main Street",
      email: "johndoe@example.com"
    };
    setPatientDetails(mockPatient);
  }, []);

  const doctorForm = () => {
    navigate("/doctor/" + hhNumber + "/doctorform");
  };

  const viewPatientRecords = () => {
    navigate("/patient/" + hhNumber + "/viewrecords");
  };

  const cancelOperation = () => {
    navigate(-1);
  };

  return (
    <div>
      <NavBar_Logout />
      <div className="bg-gradient-to-b from-black to-gray-500 p-4 sm:p-10 font-mono text-white h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-6">Patient's Profile</h2>
        <br />
        {patientDetails && (
          <center>
            <p className="text-xl sm:text-3xl mb-20">
              Name :{" "}
              <span className="font-bold text-yellow-500">{patientDetails.name}</span>{"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
              DOB :{" "}
              <span className="font-bold text-yellow-500">{patientDetails.dateOfBirth}</span>{"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
              Gender :{" "}
              <span className="font-bold text-yellow-500">{patientDetails.gender}</span>
              <br />
              <br />
              BloodGroup :{" "}
              <span className="font-bold text-yellow-500">{patientDetails.bloodGroup}</span>{"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
              Address :{" "}
              <span className="font-bold text-yellow-500">{patientDetails.homeAddress}</span>
              <br />
              <br />
              Email-Id :{" "}
              <span className="font-bold text-yellow-500">{patientDetails.email}</span>
            </p>
          </center>
        )}
      </div>
      <div>
        <center>
          <button
            onClick={viewPatientRecords}
            className="my-2 px-4 sm:px-8 py-4 sm:py-5 w-full sm:w-1/4 rounded-lg bg-teal-500 hover:bg-gray-600 transition-colors duration-300"
          >
            View Record
          </button>{" "}
          {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
          <button
            onClick={doctorForm}
            className="my-2 px-4 sm:px-8 py-4 sm:py-5 w-full sm:w-1/4 rounded-lg bg-teal-500 hover:bg-gray-600 transition-colors duration-300"
          >
            Prescription Consultancy
          </button>{" "}
          {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
          <button
            onClick={cancelOperation}
            className="my-2 px-4 sm:px-8 py-4 sm:py-5 w-full sm:w-1/4 rounded-lg bg-teal-500 hover:bg-gray-600 transition-colors duration-300"
          >
            Close
          </button>
        </center>
      </div>
    </div>
  );
};

export default DoctorViewPatient;
