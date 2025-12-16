import React from "react";
import Accordion from "../ui/Accordion";
import ToggleMenuBtn from "../ui/ToggleMenuBtn";
import { IoMdClose } from "react-icons/io";
import Tooltip from "../ui/Tooltip";
import { Link } from "react-router-dom";

function MenuItems({ menu, open, setOpen }) {
  return (
    <ul
      className={`flex px-2 gap-y-2 py-5  flex-col lg:items-start justify-center`}>
      <div className="flex md:hidden border-b pb-2 border-gray-300 justify-between items-center">
        <h1>
          ETL
          <span className="w-12 h-12 mx-2 p-2  rounded-lg bg-gray-300 text-sm text-gray-500">
            logo
          </span>
        </h1>
        <button
          className="cursor-pointer icon-button"
          onClick={() => setOpen(false)}
        >
          <IoMdClose />
        </button>
      </div>

      {menu.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.id} className="w-full ">
            <li
              onClick={() => setOpen(true)}
              className="flex flex-col  overflow-x-hidden rounded-lg w-full items-center gap-x-2  cursor-pointer">
              {/* اگر ساب منو وجود داشت یک Accordion با قابلیت باز و بسته شدن و نمایش li ها بسازه */}
              {item.submenu ? (
                <Accordion key={item.id} open={open} item={item} />
              ) : (
                <Link
                  to={item.link}
                  key={item.id}
                  className={`flex rounded-lg group  group-hover:bg-opacity-0: w-full ${
                    open ? "justify-start" : "justify-center"
                  } items-center hover:bg-gray-100 gap-x-2  p-2 cursor-pointer`}
                >
                  <Tooltip
                    position={"-translate-x-22"}
                    show={!open}
                    title={item?.title}
                  />
                  <Icon className="w-5 h-5 fill-gray-600" />
                  <span
                    className={`text-sm text-gray-600 ${
                      open ? "block" : "hidden"
                    } `}
                  >
                    {item.title}
                  </span>
                </Link>
              )}
            </li>
          </div>
        );
      })}
    </ul>
  );
}

export default MenuItems;
