import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar_Logout from "./NavBar_Logout";

const ViewDoctorProfile = () => {
  const { hhNumber } = useParams();
  const navigate = useNavigate();
  const [doctorDetails, setDoctorDetails] = useState(null);

  useEffect(() => {
    // Mock doctor data for demo
    const mockDoctor = [
      "", // index 0 unused
      "Dr. Alice Smith", // name - index 1
      "General Hospital", // hospitalName - index 2
      "1978-05-22", // dateOfBirth - index 3
      "Female", // gender - index 4
      "alice.smith@example.com", // email - index 5
      "Cardiology", // specialization - index 6
      "Cardiology Dept", // department - index 7
      "Senior Consultant", // designation - index 8
      "15 years", // workExperience - index 9
    ];
    setDoctorDetails(mockDoctor);
  }, []);

  const cancelOperation = () => {
    navigate("/doctor/" + hhNumber);
  };

  return (
    <div>
      <NavBar_Logout />
      <div className="bg-gradient-to-b from-black to-gray-800 p-4 sm:p-10 font-mono text-white flex flex-col justify-center items-center">
        <div className="h-full max-w-8xl bg-gray-700 p-24 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">Doctor's Profile</h1>
          {doctorDetails && (
            <div>
              <center>
                <p className="text-xl sm:text-2xl mb-2">
                  Name : <span className="font-bold text-yellow-500">{doctorDetails[1]}</span>
                </p>
                <p className="text-xl sm:text-2xl mb-2">
                  DOB : <span className="font-bold text-yellow-500">{doctorDetails[3]}</span>
                </p>
                <p className="text-xl sm:text-2xl mb-2">
                  Gender : <span className="font-bold text-yellow-500">{doctorDetails[4]}</span>
                </p>
                <p className="text-xl sm:text-2xl mb-2">
                  Hospital Name : <span className="font-bold text-yellow-500">{doctorDetails[2]}</span>
                </p>
                <p className="text-xl sm:text-2xl mb-2">
                  Specialization : <span className="font-bold text-yellow-500">{doctorDetails[6]}</span>
                </p>
                <p className="text-xl sm:text-2xl mb-2">
                  Department : <span className="font-bold text-yellow-500">{doctorDetails[7]}</span>
                </p>
                <p className="text-xl sm:text-2xl mb-2">
                  Designation : <span className="font-bold text-yellow-500">{doctorDetails[8]}</span>
                </p>
                <p className="text-xl sm:text-2xl mb-2">
                  Work Experience : <span className="font-bold text-yellow-500">{doctorDetails[9]}</span>
                </p>
                <p className="text-xl sm:text-2xl mb-2">
                  Email-Id : <span className="font-bold text-yellow-500">{doctorDetails[5]}</span>
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

export default ViewDoctorProfile;
