import { useState } from "react";

import useIsMobile from "../hooks/useIsMobile";
import { CgClose, CgMenu } from "react-icons/cg";
import MenuItems from "./MenuItems";

export default function SidebarMenu({ menu }) {
  const ismobile = useIsMobile(768);
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-start">
      {/* //? just in md and grater than screen */}
      {!ismobile && (
        <div
          className={`${open ? "w-64" : "w-18"} transition-all  duration-300`}
        >
          <div className="flex w-full border-b mt-2  border-gray-200 p-3 justify-between items-center ">
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
              <h1 className="font-semibold text-primary-700">
                ETL
                <span className="w-12 h-12 ml-2 p-2 mr-7 text-xs rounded-lg bg-gray-200 text-gray-500">
                  logo
                </span>
              </h1>
            </div>
            <button
              onClick={() => setOpen(!open)}
              className={`flex p-2 ${
                !open ? "mx-auto" : ""
              } transition-all icon-button  justify-center text-gray-500 items-center rounded-lg w-10 cursor-pointer hover:text-blue-700 hover:bg-blue-50`}
            >
              {open ? (
                <CgClose className="w-6 h-6  text-current" />
              ) : (
                <CgMenu className="w-6 h-6  text-current" />
              )}
            </button>
          </div>
          <MenuItems setOpen={setOpen} open={open} menu={menu} />
        </div>
      )}
    </div>
  );
}
