import { IoClose } from "react-icons/io5";
import ToggleTheme from "../toggletheme/Toggletheme";
import { useContext } from "react";
import { ThemeContext } from "../../../context/theme/ThemeContext";
import Switchtheme from "../switchtheme/Switchtheme";

function Sideconfig() {
  const { ThemeState } = useContext(ThemeContext);
  const { toggleSettings } = useContext(ThemeContext);

  const { isSettingsOpen } = ThemeState;

  return (
    <div
      className={`dark:bg-half_transparent_secundary_dark visible fixed z-20 inset-0 w-screen bg-half_transparent backdrop-blur-[1px] transition-all duration-300 ease-in-out ${!isSettingsOpen && "invisible backdrop-blur-0"}`}
    >
      <aside
        className={`absolute right-0 top-0 z-50 h-screen w-250 rounded-l bg-primary_ p-4 transition-all duration-300 ease-in-out dark:bg-secondary_dark ${!isSettingsOpen && "translate-x-[250px] overflow-hidden"}`}
      >
        <div className="flex items-center justify-between">
          <div className="font-semibold text-gray transition duration-300 dark:text-white">
            configuracion
          </div>
          <button onClick={() => toggleSettings()}>
            <IoClose
              className="text-gray transition duration-300 hover:scale-110 hover:cursor-pointer hover:text-primary dark:text-white hover:dark:text-primary"
              size={22}
            />
          </button>
        </div>

        <div className="mt-8 flex flex-col">
          <div className="font-semibold text-gray transition duration-300 dark:text-white">
            Opciones de tema
          </div>
          <ToggleTheme />
        </div>

        <div className="mt-8 flex flex-col">
          <div className="font-semibold text-gray transition duration-300 dark:text-white">
            Colores de tema
          </div>
          <Switchtheme />
        </div>
      </aside>
    </div>
  );
}

export default Sideconfig;
