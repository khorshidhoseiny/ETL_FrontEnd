import React, { useState } from "react";
import SearchInput from "../ui/SearchInput";
import Avatar from "../ui/Avatar";
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import Tooltip from "../ui/Tooltip";

function Header() {

  return (
    <div className="mx-auto p-3 px-5 w-full">
      <div className=" flex bg-white  justify-between items-center">
          <SearchInput />
        <div className="flex space-x-2">
          {/* actions */}
          <div className="flex justify-center items-center gap-x-2">
            <Link to={"/notifications"} className="group relative icon-button ">
              <span className="absolute inline-flex w-3 h-3 -top-1 right-1 -bottom-0.5  animate-ping rounded-full bg-red-400 opacity-100" />
              <span className="absolute inline-flex -top-1 right-1 -bottom-0.5 h-3 w-3 items-center justify-center rounded-full bg-red-400 p-0.5 text-[10px] font-bold text-white">
                3
              </span>
              <IoMdNotificationsOutline className="w-6 text-gray-500 group-hover:bg-opacity-0 h-6" />
              <Tooltip show={true} title={"اعلان ها"} />
            </Link>
            <Link to={"/setting"} className="group icon-button relative">
              <AiOutlineSetting className="w-6 text-gray-500 group-hover:bg-opacity-0  h-6" />
              <Tooltip show={true} title={"تنظیمات"} />
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
