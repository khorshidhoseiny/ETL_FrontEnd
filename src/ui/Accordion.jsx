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
      <div
        onClick={() => toggleMenu(item.id)}
        className={`flex rounded-lg w-full hover:bg-gray-100 relative  items-center gap-x-2 p-2   cursor-pointer`}
      >
        <div
          className={`flex ${
            open ? "justify-between" : "justify-center"
          } w-full items-center `}
        >
          <div className="flex gap-x-2 relative items-center">
            <Icon className="w-5 h-5 fill-gray-600" />
            <span
              className={`text-sm text-gray-600 ${open ? "block" : "hidden"} `}
            >
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
      </div>
      {/* sub-menu */}
      <ul
        className={`${
          openMenus[item.id] && open ? " block " : "hidden"
        }  mr-10 w-full border-r-2  border-gray-200 transition-all duration-200 text-sm`}
      >
        {item.submenu.map((subm, index) => {
          return (
            <NavLink key={index} to={subm.link}>
              <li className="cursor-pointer p-3  hover:bg-primary-50/60 w-full whitespace-nowrap hover:text-primary-600">
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
