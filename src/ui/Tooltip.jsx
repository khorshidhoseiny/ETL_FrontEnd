import React from "react";

function Tooltip({ title, show, position }) {
  return show ? (
    <div className={`hidden absolute z-50 group-hover:block`}>
      <div
        className={`group  flex ${position} top-0 flex-col items-center rounded-sm text-center text-sm text-gray-800 before:-top-2`}
      >
        <div className="bg-gray-300/40 rounded-full p-1">
          <p className="whitespace-nowrap px-1 text-xs">{title}</p>
        </div>
        <div className="h-0 w-fit border-l-8 border-r-8 border-b-8 border-transparent border-t-black"></div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default Tooltip;
