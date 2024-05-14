import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Classes from "./Classes";
import Resourses from "./Resourses";

function Learn() {
  const [active, setActive] = useState(true);
  return (
    <div className="flex">
      {/* Side bar */}
      <div className="bg-white max-w-xs h-screen overflow-y-auto md:min-w-[18rem]">
        <Sidebar />
      </div>

      <div className="bg-white flex-1 p-5 overflow-auto">
        <div>
          <p className="text-[#2F2E2E] font-[500] text-[36px] -mt-3">
            Continue learning
          </p>
          <p className="text-[#2F2E2E] text-[18px] font-[400]">
            Good morning <span className="text-purple-600">Ezeigbo</span>
          </p>
          <p className="flex space-x-4 mt-4 text-[16px]">
            <span
              className={`${
                active && `border-b-2 border-blue-600`
              } hover:border-b-2 hover:border-blue-600 cursor-pointer`}
              onClick={() => setActive(true)}
            >
              My classes
            </span>
            <span
              className={`${
                !active && `border-b-2 border-blue-600`
              } hover:border-b-2 hover:border-blue-600 cursor-pointer`}
              onClick={() => setActive(false)}
            >
              Learning resources
            </span>
          </p>
        </div>

        {/* My Classes */}
        {active && <Classes />}

        {/* Learning Resourses */}

        {!active && <Resourses />}

      </div>

      <div className="bg-green-500 flex-1 max-w-xs"></div>
    </div>
  );
}

export default Learn;
