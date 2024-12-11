
// ContextApi.js
import React, { createContext, useState } from "react";

export const ContextData = createContext();

const ContextApi = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const updateSearchInput = (searchTerm) => {
    setSearch(searchTerm);
  };

  return (
    <ContextData.Provider
      value={{
        students,
        addStudent,
        deleteStudent,
        search,
        updateSearchInput,
      }}
    >
      {children}
    </ContextData.Provider>
  );
};

export default ContextApi;