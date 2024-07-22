import React from "react";
import Homed from "../FAQ/Homefaq";
import Navf from "../FAQ/Navf/Navf";

const Design = () => {
  return (
    <div className="bg-sky-700 text-white min-h-screen">
      <div className="relative">
        <Navf />
        <div className="pt-16">
          {" "}
          {/* Adjust padding top based on Navf height */}
          <Homed />
        </div>
      </div>
    </div>
  );
};

export default Design;
