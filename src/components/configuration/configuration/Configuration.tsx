import { useContext } from "react";
import { LuSettings } from "react-icons/lu";
import { ThemeContext } from "../../../context/theme/ThemeContext";

function Configuration() {
  const { toggleSettings } = useContext(ThemeContext);

  return (
    <button
      onClick={() => toggleSettings()}
      className="group absolute bottom-10 right-10 z-10 grid h-8 w-8 place-items-center rounded bg-primary-500 transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer"
    >
      <LuSettings
        className="text-base transition duration-300 ease-in-out group-hover:rotate-90"
        size={20}
      />
    </button>
  );
}

export default Configuration;
