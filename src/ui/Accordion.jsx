import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Accordion({ open, item }) {
  const Icon = item?.icon;
  // کنترل زیرمنوها
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (key) => {
    console.log(key);
    setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));
    console.log(openMenus);
  };
  return (
    <>
      <NavLink
        onClick={() => toggleMenu(item.id)}
        className={`flex rounded-lg w-full hover:text-blue-700 text-gray-500  hover:fill-blue-700 hover:bg-blue-100/50 relative  items-center gap-x-2 p-2 px-4 cursor-pointer`}
      >
        <div
          className={`flex ${
            open ? "justify-between" : "justify-center"
          } w-full items-center `}
        >
          <div className="flex gap-x-2    relative items-center">
            <Icon className="w-5 h-5  fill-current" />
            <span className={`text-sm  ${open ? "block" : "hidden"} `}>
              {item.title}
            </span>
          </div>
          {/* chevron Icon if submenu was true */}
          <span
            className={`transition-transform ${
              open ? "block" : "hidden"
            } duration-300 lg:block ${openMenus[item.id] ? "rotate-180" : ""}`}
          >
            <IoChevronDown
              className={`text-gray-400 ${open ? "block" : "hidden"}`}
            />
          </span>
        </div>
        {/* {<Tooltip title={item?.title} />} */}
      </NavLink>
      {/* sub-menu */}
      <ul
        className={`${
          openMenus[item.id] && open ? " flex " : "opacity-0"
        }    border-r-2 mr-9 border-gray-200 overflow-hidden  w-full flex justify-start transition-all ease-in flex-col items-start  duration-200 text-sm`}
      >
        {item.submenu.map((subm, index) => {
          return (
            <NavLink key={index} to={subm.link} className=" w-full ">
              <li className="cursor-pointer p-2    hover:bg-blue-50 whitespace-nowrap hover:text-blue-700">
                {subm.title}
              </li>
            </NavLink>
          );
        })}
      </ul>
    </>
  );
}

export default Accordion;
