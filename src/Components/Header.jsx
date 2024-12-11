import React, { useState, useContext, useEffect } from "react";
import { ContextData } from "./ContextApi";
import { IoSearch } from "react-icons/io5";
import useDarkMode from "use-dark-mode";
import { IoMoonOutline } from "react-icons/io5";
import { LuSunMedium } from "react-icons/lu";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { updateSearchInput } = useContext(ContextData);
  const darkMode = useDarkMode(false);

  const handleFilter = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    updateSearchInput(searchQuery);
  }, [searchQuery]);

  return (
    <header
      className={`flex items-center py-4 px-8 justify-around ${
        darkMode.value
          ? "bg-gray-800 text-gray-100"
          : "bg-slate-100 text-gray-900"
      }`}
    >
      <h1 className="text-2xl font-bold">Student Dashboard</h1>
      <div className="w-[50%] flex items-center relative">
        <input
          type="text"
          value={searchQuery}
          onChange={handleFilter}
          placeholder="Search student Name or Id"
          className={`border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[100%] ${
            darkMode.value
              ? "bg-gray-700 text-gray-100 border-gray-600"
              : "bg-white text-gray-900 border-gray-300"
          }`}
        />
        <div className="absolute right-8 text-2xl">
          <IoSearch />
        </div>
      </div>
      <div onClick={darkMode.toggle} className="cursor-pointer  text-2xl pl-[20%]">
        {darkMode.value ? <IoMoonOutline /> : <LuSunMedium />}
      </div>
    </header>
  );
};

export default Header;
