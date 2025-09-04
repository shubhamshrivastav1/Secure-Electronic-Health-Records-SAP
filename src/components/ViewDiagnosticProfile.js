import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar_Logout from "./NavBar_Logout";

const ViewDiagnosticProfile = () => {
  const { hhNumber } = useParams();
  const navigate = useNavigate();
  const [diagnosticDetails, setDiagnosticDetails] = useState(null);

  useEffect(() => {
    // Mock diagnostic data for demo purpose
    const mockDiagnostic = [
      "",                     // 0 unused
      "City Diagnostic Center", // 1 Diagnostic Name
      "City Hospital",        // 2 Hospital Name
      "Downtown Avenue",      // 3 Location
      "contact@diagnostic.com" // 4 Email
    ];
    setDiagnosticDetails(mockDiagnostic);
  }, []);

  const cancelOperation = () => {
    navigate("/diagnostic/" + hhNumber);
  };

  return (
    <div>
      <NavBar_Logout />
      <div className="bg-gradient-to-b from-black to-gray-800 p-4 sm:p-10 font-mono text-white flex flex-col justify-center items-center">
        <div className="h-full max-w-8xl bg-gray-700 p-24 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">Diagnostic's Profile</h1>
          {diagnosticDetails && (
            <div>
              <center>
                <p className="text-xl sm:text-2xl mb-2">
                  Diagnostic Center Name : <span className="font-bold text-yellow-500">{diagnosticDetails[1]}</span>
                </p>
                <p className="text-xl sm:text-2xl mb-2">
                  Hospital Name : <span className="font-bold text-yellow-500">{diagnosticDetails[2]}</span>
                </p>
                <p className="text-xl sm:text-2xl mb-2">
                  Location : <span className="font-bold text-yellow-500">{diagnosticDetails[3]}</span>
                </p>
                <p className="text-xl sm:text-2xl mb-2">
                  Email-Id : <span className="font-bold text-yellow-500">{diagnosticDetails[4]}</span>
                </p>
                <p className="text-xl sm:text-2xl mb-2">
                  HH Number (6 digit pin) : <span className="font-bold text-yellow-500">{hhNumber}</span>
                </p>
              </center>
            </div>
          )}
          <div className="col-span-full">
            <button
              onClick={cancelOperation}
              className="px-5 py-2.5 bg-custom-teal text-white font-bold text-lg rounded-lg cursor-pointer mt-3 mr-5 transition-transform transition-background-color duration-300 ease-in hover:bg-gray-400 transform hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDiagnosticProfile;
