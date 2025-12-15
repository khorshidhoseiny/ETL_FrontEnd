import React, { useState } from "react";
import SearchInput from "../ui/SearchInput";
import Avatar from "../ui/Avatar";
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import ToggleMenuBtn from "../ui/ToggleMenuBtn";
import Drawer from "../ui/Drawer";
import MenuItems from "./MenuItems";
import { menuItems } from "../lib/data";

function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div className="bg-white container p-3 max-w-7xl">
      <div className=" px-5  flex justify-between items-center">
        <div className="flex justify-center items-center gap-x-3">
          <button
            onClick={() => setOpenDrawer(!openDrawer)}
            className="md:hidden block p-3  icon-button cursor-pointer"
          >
            <ToggleMenuBtn open={openDrawer} />
          </button>
          <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <MenuItems
              open={openDrawer}
              setOpen={setOpenDrawer}
              menu={menuItems}
            />
          </Drawer>
          <SearchInput />
        </div>

        <div className="flex  space-x-2">
          <div className="flex justify-center items-center gap-x-2">
            <Link to={"/notifications"} className="icon-button relative">
              <span className="absolute inline-flex w-3 h-3 -top-1 right-1 -bottom-0.5  animate-ping rounded-full bg-red-400 opacity-100" />
              <span className="absolute inline-flex -top-1 right-1 -bottom-0.5 h-3 w-3 items-center justify-center rounded-full bg-red-400 p-0.5 text-[10px] font-bold text-white">
                3
              </span>
              <IoMdNotificationsOutline className="w-6 text-gray-500 h-6" />
            </Link>
            <Link to={"/setting"} className="icon-button relative">
              <AiOutlineSetting className="w-6  text-gray-500 h-6" />
            </Link>
          </div>
          <span className="w-[0.3px] h-12 bg-gray-300" />
          <Avatar
            Img={"/images/avatar.png"}
            Role={"Super Admin"}
            name={"Morteza Karimian"}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
