import { useState } from "react";
import { FaX } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import Accordion from "../ui/Accordion";
import ToggleMenuBtn from "../ui/ToggleMenuBtn";

export default function SidebarMenu({ menu }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-start">
      <div
        className={`${open ? "w-64" : "w-18"}  transition-all  duration-300`}
      >
        <div className="flex w-full border-b lg:border-0 border-gray-200 p-3 justify-between items-center ">
          <div
            className={`flex ${
              open ? "block" : "hidden"
            } gap-x-2 w-10 h-10 justify-center items-center`}
          >
            <img
              src="./images/logo.png"
              className="h-full shadow rounded-xl"
              alt=""
            />
            <h1 className=" font-semibold text-primary-700">
              {/* ApplyWisely */}ETL
            </h1>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className={`flex p-3 ${
              !open ? "mx-auto" : ""
            } transition-all icon-button rounded-lg w-10 cursor-pointer hover:bg-primary-50`}
          >
            <ToggleMenuBtn open={open} />
          </button>
        </div>
        <nav className="mt-4 ">
          <ul className="flex px-2 gap-y-2 flex-col lg:items-start justify-center">
            {menu.map((item) => {
              const Icon = item.icon;
              return (
                <div className="w-full">
                  <li
                    key={item.id}
                    onClick={() => setOpen(true)}
                    className="flex flex-col  overflow-x-hidden rounded-lg w-full items-center gap-x-2  cursor-pointer"
                  >
                    {/* اگر ساب منو وجود داشت یک Accordion با قابلیت باز و بسته شدن و نمایش li ها بسازه */}
                    {item.submenu ? (
                      <Accordion key={item.id} open={open} item={item} />
                    ) : (
                      <div
                        key={item.id}
                        className={`flex rounded-lg w-full ${
                          open ? "justify-start" : "justify-center"
                        } items-center hover:bg-gray-100 gap-x-2  p-2 cursor-pointer`}
                      >
                        <Icon className="w-5 h-5 fill-gray-600" />
                        <span
                          className={`text-sm text-gray-600 ${
                            open ? "block" : "hidden"
                          } `}
                        >
                          {item.title}
                        </span>
                      </div>
                    )}
                  </li>
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
