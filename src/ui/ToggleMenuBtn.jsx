import React from "react";

function ToggleMenuBtn({ open }) {
  return (
    <label
      htmlFor="label-check"
      className={`relative flex flex-col justify-evenly gap-y-1 w-6 h-6 cursor-pointer`}
    >
      <span
        className={`block h-0.5 w-full bg-gray-500 transition-transform duration-500 ${
          open ? "rotate-45 translate-y-2.5" : ""
        }`}
      ></span>
      <span
        className={`block h-0.5 w-full bg-gray-500 transition-opacity duration-500 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`block h-0.5 w-full bg-gray-500 transition-transform duration-500 ${
          open ? "-rotate-45 -translate-y-2" : ""
        }`}
      ></span>
    </label>
  );
}

export default ToggleMenuBtn;
