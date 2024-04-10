import { CgMenuGridO } from "react-icons/cg";
import { CgCalendarDates } from "react-icons/cg";
import { LuWarehouse } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { LuLineChart } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { menu } from "../../interfaces/dashboard/Menu";
import { Link } from "react-router-dom";

import img from "../../assets/images/Logo.png";
import { NavLink } from "react-router-dom";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/theme/ThemeContext";

const menuLink: menu[] = [
  { name: "dashboard", link: "/Dashboard", icon: CgMenuGridO },
  { name: "Rentas", link: "/Dashboard/Rents", icon: CgCalendarDates },
  { name: "Inventario", link: "/Inventory", icon: LuWarehouse },
  { name: "Clientes", link: "/Clients", icon: LuUsers },
  { name: "Analiticas", link: "/Analytics", icon: LuLineChart },
  { name: "configuracion", link: "/setting", icon: LuSettings },
];

function Sidebar() {
  const [active, setActive] = useState(0);

  const { ThemeState } = useContext(ThemeContext);
  const { toggleSidebar } = useContext(ThemeContext);

  const { isSidebarOpen } = ThemeState;

  return (
    <aside
      className={`relative h-dvh min-h-screen bg-primary_ transition-all duration-300 ease-in-out dark:bg-secondary_dark max-sm:absolute max-sm:z-10 max-sm:w-full max-sm:duration-300 ${isSidebarOpen ? "w-250 max-sm:!w-0 max-sm:-translate-x-64 max-sm:overflow-hidden" : "w-70"}`}
    >
      <nav>
        <div
          className={`relative flex justify-start gap-2 pt-4 transition-all duration-300 ease-in-out ${isSidebarOpen ? "ml-9 mr-6" : "ml-5"}`}
        >
          <Link to={"/Dashboard"} className="w-8 min-w-8 rounded-full">
            <img src={img} alt="" />
          </Link>
          <Link
            to={"/Dashboard"}
            className={`flex items-center text-xl font-extrabold text-primary duration-300 max-sm:translate-x-0 max-sm:overflow-visible max-sm:opacity-100 ${isSidebarOpen ? "delay-300" : "-translate-x-6 overflow-hidden opacity-0"}`}
          >
            RC&T
            <span className="font-normal text-secundary transition-all duration-300 dark:text-white">
              Erica
            </span>
          </Link>
          <button
            onClick={() => toggleSidebar()}
            className="absolute bottom-1 right-4 sm:hidden"
          >
            <IoClose
              className="text-gray transition-all duration-300 ease-in-out hover:scale-125 hover:transform hover:cursor-pointer hover:text-primary"
              size={22}
            />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 top-[75px] overflow-y-auto">
          <ul className="mb-4 mt-6 flex flex-col gap-4">
            {menuLink.map((item: menu, i: number) => (
              <NavLink
                to={item.link}
                key={item.name}
                onClick={() => setActive(i)}
                className={`hover:dark:after:shadow-cmain_dark hover:dark:before:shadow-cmain_dark group relative flex items-center gap-2 rounded-l rounded-r-none border-l-4 pb-2 pt-2 transition-all duration-300 ease-in-out before:absolute before:right-0 before:top-[-30px] before:h-[30px] before:w-[30px] before:rounded-full before:shadow-bar_top before:shadow-transparent before:transition-all before:duration-300 before:content-[''] after:absolute after:-bottom-[30px] after:right-0 after:h-[30px] after:w-[30px] after:rounded-full after:shadow-bar_bottom after:shadow-transparent after:transition-all after:duration-300 after:content-[''] hover:border-l-4 hover:border-primary-500 hover:bg-main hover:before:shadow-cmain hover:after:shadow-cmain hover:dark:bg-main_dark max-sm:mr-4 max-sm:rounded max-sm:before:hidden max-sm:after:hidden ${isSidebarOpen ? "pl-8" : "pl-4"} ${active === i ? "dark:before:!shadow-cmain_dark dark:after:!shadow-cmain_dark border-primary-500 bg-main before:!shadow-cmain after:!shadow-cmain dark:bg-main_dark" : "border-transparent"}`}
              >
                <div
                  className={`flex h-8 w-8 min-w-8 items-center justify-center rounded transition-all duration-300 ease-in-out group-hover:bg-primary-500 group-hover:text-white   ${active === i ? " bg-primary-500 text-base" : " bg-main text-gray dark:bg-main_dark dark:text-white"}`}
                >
                  {React.createElement(item.icon, { size: 20 })}
                </div>

                <div
                  style={{
                    transitionDelay: `${isSidebarOpen ? `${i + 3}00ms` : "0ms"}`
                  }}
                  className={` font-bold capitalize transition duration-300 group-hover:text-primary max-sm:translate-x-0 max-sm:overflow-visible max-sm:opacity-100 group-hover:!delay-0 ${active === i ? "text-primary" : "text-gray dark:text-white"} ${isSidebarOpen ? "" : "-translate-x-6 overflow-hidden opacity-0"}`}
                >
                  {item.name}
                </div>

                <div
                  className={`fixed left-[250px] z-[1] scale-0 rounded bg-primary_ pb-1 pl-2 pr-1 pt-1 font-semibold capitalize text-gray duration-300 before:absolute before:left-[1px]  before:top-1/2 before:h-[10px] before:w-[10px] before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:transform before:rounded-sm before:bg-primary_ before:content-[''] group-hover:left-[75px] group-hover:scale-100 dark:bg-primary-500 dark:text-white dark:before:bg-primary-500 max-sm:hidden ${isSidebarOpen && "hidden"}`}
                >
                  {item.name}
                </div>
              </NavLink>
            ))}
          </ul>
        </div>
      </nav>
      {/* {isSettingsOpen && <Sideconfig />} */}
    </aside>
  );
}

export default Sidebar;
