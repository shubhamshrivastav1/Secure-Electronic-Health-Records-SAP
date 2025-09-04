import React, { useState } from "react";
import NavBar from "./NavBar";

// Assuming you have images in a folder named `images` inside the `src` directory.
import lp_11 from "./lp_11.png";
import lp_10 from "./lp_10.png";
import lp_12 from "./lp_12.png";

function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);
  function onEnter() {
    setIsHovered(true);
  }
  function onLeave() {
    setIsHovered(false);
  }

  return (
    <div>
      <NavBar></NavBar>
      <div className="bg-gray-900 text-white font-sans min-h-screen flex items-center justify-center">
        <div
          className="w-[1400px] h-[450px] mt-[-180px] flex"
          onMouseEnter={() => setTimeout(onEnter, 500)}
          onMouseLeave={() => setTimeout(onLeave, 600)}
        >
          {/* Image */}
          <div className="flex-grow relative overflow-hidden transition-transform duration-10000 ease-in-out transform hover:scale-105">
            <img
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-10000 ease-in-out ${
                !isHovered ? "opacity-100" : "opacity-0"
              }`}
              src={lp_10}
              alt="Landing page illustration"
            />
            <img
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-10000 ease-in-out ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
              src={lp_12}
              alt="Landing page illustration"
            />
            <img
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-10000 ease-in-out ${
                !isHovered ? "opacity-100" : "opacity-0"
              }`}
              src={lp_11}
              alt="Landing page illustration"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col text-custom-blue space-y-8 w-2/5 p-8 bg-gray-800 shadow-lg ml-4 rounded-lg transition-transform duration-10000 ease-in-out transform hover:scale-105">
            <div className="space-y-4">
              <p className="text-lg font-mono">
                HealthLedger: A Patient-Controlled Blockchain EHR System
                HealthLedger is a blockchain-based EHR solution that gives patients full control over their health records. Using Polygon, IPFS, and smart contracts, it ensures secure, transparent, and patient-owned data access.

                Built with React.js, Web3.js, Node.js, and MongoDB, it creates a scalable, interoperable system that reduces costs, eliminates data silos, and enables emergency access. Designed for India, HealthLedger delivers low-cost, transparent, and patient-first healthcare data management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
