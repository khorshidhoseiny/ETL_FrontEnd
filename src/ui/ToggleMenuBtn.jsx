import React from "react";

function ToggleMenuBtn({ open }) {
  return (
    <label
      htmlFor="label-check"
      className={`relative flex flex-col justify-evenly gap-y-1 w-6 h-6 cursor-pointer`}
    >
      <span
        className={`block h-0.5 w-full bg-gray-500 transition-transform duration-200 ${
          open ? "rotate-45 translate-y-2.5" : ""
        }`}
      ></span>
      <span
        className={`block h-0.5 w-full bg-gray-500 transition-opacity duration-200 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`block h-0.5 w-full bg-gray-500 transition-transform duration-200 ${
          open ? "-rotate-45 -translate-y-2" : ""
        }`}
      ></span>
    </label>
  );

  // <div className="relative">
  //   <input
  //     className="hidden cursor-none"
  //     checked={open}
  //     id="label-check"
  //     type="checkbox"
  //   />
  //   <label
  //     for="label-check"
  //     className={`hamburger-label absolute ${
  //       open ? "-top-4 -left-4" : "-top-2"
  //     }    block `}
  //   >
  //     <div className="line1 bg-gray-500 w-4 h-0.5 transition-all duration-200 absolute"></div>
  //     <div className="line2 w-4 h-0.5 bg-gray-500 mt-2 transition-all duration-300 absolute"></div>
  //     <div className="line3 w-4 h-0.5 mt-4 bg-gray-500 transition-all duration-300 absolute"></div>
  //     <label></label>
  //   </label>
  // </div>
}

export default ToggleMenuBtn;
