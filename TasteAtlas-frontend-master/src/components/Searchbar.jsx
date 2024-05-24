import React, { useState } from "react";
import { Link } from "react-router-dom";

const Searchbar = (props) => {
  const [searchTitle, setSearchTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://tasteatlas-frontend.onrender.com/dashboard/getrecipe/${searchTitle}`
      );
      const jsonData = await response.json();
      setInfo(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <div className="text-center mt-6 text-lg font-bold">
        Search a country for a meal recipe
      </div>
      <div className="flex flex-col md:flex-row justify-center mt-4">
        <form action="" className="w-full md:w-1/2" onSubmit={handleSubmit}>
          <input
            type="text"
            className="text-black w-full h-9 rounded-full px-4 md:px-10 bg-slate-200 focus:bg-white focus:outline-none"
            placeholder="Search"
            onChange={(e) => {
              setSearchTitle(e.target.value);
            }}
          />
        </form>
        <span className="mt-4 md:mt-0 px-2 md:px-4 font-extrabold text-lg">OR</span>
        <Link to="/dashboard/addNew">
          <button className="bg-[#507b14] text-sm md:text-base rounded-md h-9 px-4 md:px-6 text-white mt-4 md:mt-0">
            Create a Meal
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Searchbar;
