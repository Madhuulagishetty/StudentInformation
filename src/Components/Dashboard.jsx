import React, { useState } from "react";

import StudentData from "./StudentData";
import StudentList from "./StudentList";
import Header from "./Header";

const Dashboard = () => {
  const [overlay, setOverlay] = useState(false);

  const HandleForm = () => {
    setOverlay(true);
  };
  const HandleFormGo = () => {
    setOverlay(false);
  };

  return (
    <div className="p-8">
      <Header />
      <br/>

      <button
        onClick={HandleForm}
        className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none absolute top-12 right-[10%] focus:ring-blue-500 "
      >
        Add Student
      </button>
      <StudentData />

      {overlay && <StudentList HandleFormGo={HandleFormGo} />}
    </div>
  );
};

export default Dashboard;
