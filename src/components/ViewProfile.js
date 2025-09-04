import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar_Logout from "./NavBar_Logout";

const ViewProfile = () => {
  const { hhNumber } = useParams();
  const navigate = useNavigate();
  const [patientDetails, setPatientDetails] = useState(null);

  useEffect(() => {
    // Mock patient details for demo
    const mockPatient = {
      name: "Jane Doe",
      dateOfBirth: "1990-01-01",
      gender: "Female",
      bloodGroup: "A+",
      homeAddress: "123 Maple St",
      email: "janedoe@example.com",
    };
    setPatientDetails(mockPatient);
  }, []);

  const cancelOperation = () => {
    navigate("/patient/" + hhNumber);
  };

  return (
    <div>
      <NavBar_Logout />
      <div className="bg-gradient-to-b from-black to-gray-800 p-4 sm:p-10 font-mono text-white flex flex-col justify-center items-center">
        <div className="h-full max-w-8xl bg-gray-700 p-24 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">Profile</h1>
          {patientDetails && (
            <div>
              <center>
                <p className="text-xl sm:text-2xl mb-3">
                  Name: <span className="font-bold text-yellow-500">{patientDetails.name}</span>
                </p>
                <p className="text-xl sm:text-2xl mb-3">
                  DOB: <span className="font-bold text-yellow-500">{patientDetails.dateOfBirth}</span>
                </p>
                <p className="text-xl sm:text-2xl mb-3">
                  Gender: <span className="font-bold text-yellow-500">{patientDetails.gender}</span>
                </p>
                <p className="text-xl sm:text-2xl mb-6">
                  Blood Group: <span className="font-bold text-yellow-500">{patientDetails.bloodGroup}</span>
                </p>
                <p className="text-xl sm:text-2xl mb-3">
                  Address: <span className="font-bold text-yellow-500">{patientDetails.homeAddress}</span>
                </p>
                <p className="text-xl sm:text-2xl mb-3">
                  Email-Id: <span className="font-bold text-yellow-500">{patientDetails.email}</span>
                </p>
              </center>
            </div>
          )}
          <div className="col-span-full">
            <button
              onClick={cancelOperation}
              className="px-5 py-2.5 bg-custom-teal text-white font-bold text-lg rounded-lg cursor-pointer mt-3 mr-5 transition-transform transition-background-color duration-300 ease-in hover:bg-gray-400 transform hover:scale-105">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
