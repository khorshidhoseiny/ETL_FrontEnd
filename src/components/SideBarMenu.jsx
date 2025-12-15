import { useState } from "react";
import Accordion from "../ui/Accordion";
import ToggleMenuBtn from "../ui/ToggleMenuBtn";
import useIsMobile from "../hooks/useIsMobile";
import MenuItems from "./MenuItems";

export default function SidebarMenu({ menu }) {
  const ismobile = useIsMobile(768);

  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-start">
      {/* //? just in md and grater than screen */}
      {!ismobile && (
        <div
          className={`${open ? "w-64" : "w-18"}  transition-all  duration-300`}
        >
          <div className="flex  w-full border-b lg:border-0 border-gray-200 p-3 justify-between items-center ">
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
          <MenuItems setOpen={setOpen} open={open} menu={menu} />
        </div>
      )}
    </div>
  );
}
