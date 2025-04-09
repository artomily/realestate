import React from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div className="w-full md:w-[80%] justify-center mx-auto bg-white h-[4rem] sm:h-[5rem] flex px-4 sm:px-8 flex-col rounded-lg">
      <div className="flex items-center justify-center h-full">
        <input
          type="text"
          placeholder="Enter an address or city"
          className="sm:flex-[0.8] h-[60%] bg-gray-100 block rounded-lg outline-none px-4 placeholder text-sm"
        />
        <div className="flex items-center flex-[0.2] ml-8 space-x-6">
          <div className="lg:flex hidden items-center cursor-pointer space-x-2">
            <HiAdjustmentsHorizontal className="text-gray-700 w-6 h-6" />
            <p className="text-gray-700 font-semibold ">Advanced</p>
          </div>
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-500 hover:bg-green-800 transition-all duration-200 cursor-pointer">
            <FaSearch className="text-white"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
