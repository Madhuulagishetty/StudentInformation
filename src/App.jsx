import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StudentList from "./Components/StudentList";
import StudentData from "./Components/StudentData";
import Dashboard from "./Components/Dashboard";
import ContextApi from "./Components/ContextApi";

const App = () => {
  return (
    <ContextApi>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="studentList" element={<StudentList />} /> */}
          <Route path="studentData" element={<StudentData />} />
        </Routes>
      </BrowserRouter>
    </ContextApi>
  );
};

export default App;
