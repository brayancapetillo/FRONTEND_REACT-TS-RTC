import { ThemeContext } from "../../../context/theme/ThemeContext";
import { useContext, useEffect } from "react";

function ToggleTheme() {
  const { ThemeState } = useContext(ThemeContext);
  const { isDarkTheme } = ThemeState;

  const { toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    isDarkTheme
      ? document.querySelector("html")?.classList.add("dark")
      : document.querySelector("html")?.classList.remove("dark");
  }, [isDarkTheme]);

  return (
    <div className="mt-6 flex flex-col items-center gap-2 z-">
      <div
        className={`relative h-12 w-12 min-w-12 rounded-full bg-gradient-to-tr ${!isDarkTheme ? "from-pink-600 to-amber-500" : "from-indigo-300 to-blue-300"}`}
      >
        <div
          className={`toggle absolute right-0 h-9 w-9 origin-top-right scale-0 rounded-full bg-primary_ transition-transform duration-700 ease-[cubic-bezier(0.645,0.045,0.355,1)] dark:bg-secondary_dark ${!isDarkTheme ? "" : "scale-100"}`}
        ></div>
      </div>
      <div className="relative mt-4 flex items-center justify-center">
        <div className="relative">
          <input
            id="checkbox_toggle"
            type="checkbox"
            className="hidden"
            onClick={() => toggleTheme()}
          />

          <div className="shadow-input bg-half_transparent_secundary relative h-6 w-28 rounded-full ">
            <label
              className={`flex h-6 w-28 cursor-pointer items-center justify-around`}
              htmlFor="checkbox_toggle"
            >
              <label
                className={`absolute left-0 h-6 w-14 cursor-pointer rounded-full bg-primary_ transition duration-300 ease-in-out dark:bg-secondary_dark dark:opacity-100 ${isDarkTheme && "translate-x-14"}`}
                htmlFor="checkbox_toggle"
              ></label>
              <label
                className={`z-50 cursor-pointer text-xs font-semibold dark:text-white ${isDarkTheme && "font-normal opacity-50"}`}
                htmlFor="checkbox_toggle"
              >
                Day
              </label>
              <label
                className={`z-50 cursor-pointer text-xs font-semibold dark:text-white ${!isDarkTheme && "font-normal opacity-50"}`}
                htmlFor="checkbox_toggle"
              >
                Night
              </label>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToggleTheme;
