import React from "react";
import { CiSearch } from "react-icons/ci";

function SearchInput() {
  return (
    <div className="flex items-center border border-gray-300 rounded-xl  relative max-w-47.5 leading-7">
      <input
        className="w-full h-10 leading-7 px-4 pl-10 
            border-2 border-transparent rounded-xl 
             outline-none bg-white text-black 
              transition-all duration-300 ease-in-out focus:outline-none
             focus:border-[rgba(0,103,247,0.65)]
             focus:bg-white focus:ring-4 focus:ring-[rgba(0,119,247,0.2)]

"
        placeholder="جستجو"
      />
      <CiSearch className="stroke-1 absolute w-4 h-4 text-gray-400 left-4" />
    </div>
  );
}

export default SearchInput;
