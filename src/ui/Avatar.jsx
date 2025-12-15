import React from "react";

function Avatar({ Img, name, Role }) {
  return (
    <div className="flex gap-x-2  px-1 ">
      <div className="flex flex-col justify-center text-end ">
        <h1 className="text-gray-500 font-semibold text-xs whitespace-nowrap sm:text-sm">
          {name}
        </h1>
        <h3 className="text-xs text-gray-400">{Role}</h3>
      </div>
      <img
        src={Img}
        className="w-10 h-10 bg-gray-200 rounded-full ring-1 ring-gray-300"
        alt="profile"
      />
    </div>
  );
}

export default Avatar;
