import { LuMenu } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuMessageCircle } from "react-icons/lu";
import { LuChevronDown } from "react-icons/lu";

import img from "../../assets/images/avatar.png";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme/ThemeContext";

function Navbar() {
  const { toggleSidebar } = useContext(ThemeContext);

  return (
    <div className="relative flex h-65 items-center justify-between bg-primary_ pl-4 pr-4 dark:bg-secondary_dark">
      <button onClick={() => toggleSidebar()}>
        <LuMenu
          className="text-gray transition-all duration-300 ease-in-out hover:scale-110 hover:transform hover:cursor-pointer dark:text-white"
          size={22}
        />
      </button>
      <div className="flex items-center justify-items-end gap-5">
        <button className="relative max-sm:hidden">
          <LuMessageCircle
            className="text-primary transition-all duration-300 ease-in-out hover:scale-110 hover:transform hover:cursor-pointer"
            size={22}
          />
        </button>
        <button className="relative max-sm:hidden">
          <IoMdNotificationsOutline
            className="text-primary transition-all duration-300 ease-in-out hover:scale-110 hover:transform hover:cursor-pointer"
            size={23}
          />
          <div className="absolute right-[-2px] top-[-2px] h-2 w-2 rounded-full bg-primary-500"></div>
        </button>
        <div className=" flex items-center gap-1">
          <div>
            <img
              className="h-9 w-9 rounded-full border-2 border-primary-500 p-[1px]"
              src={img}
              alt=""
            />
          </div>
          <span className="capitalize text-gray dark:text-white">
            Brayan capetillo
          </span>
          <button className="pt-1 text-gray dark:text-white">
            <LuChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
