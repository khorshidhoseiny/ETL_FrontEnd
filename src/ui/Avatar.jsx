import React from "react";

function Avatar({ Img, name, Role }) {
  return (
    <div className="flex gap-x-2  px-1 ">
      <div className="flex flex-col justify-center text-end ">
        <h1 className="text-stone-600 font-semibold text-xs whitespace-nowrap sm:text-sm">
          {name}
        </h1>
        <h3 className="text-xs text-gray-400">{Role}</h3>
      </div>
      <img
        src={Img}
        className="w-12 h-12 rounded-full ring ring-gray-300"
        alt="profile"
      />
    </div>
  );
}

export default Avatar;
