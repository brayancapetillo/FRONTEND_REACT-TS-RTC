import { useContext, useEffect } from "react";
import { ThemeColor } from "../../../constants/theme/ColorTheme";
import { switchtheme } from "../../../interfaces/theme/switchtheme/switchtheme";
import { ThemeContext } from "../../../context/theme/ThemeContext";
import { LuCheck } from "react-icons/lu";

function Switchtheme() {
  const ThemeColors: switchtheme[] = ThemeColor;

  const { setColorTheme } = useContext(ThemeContext);

  const { ThemeState } = useContext(ThemeContext);
  const { SelectedTheme } = ThemeState;

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--Color-Primary-50",
      SelectedTheme.palette[0],
    );
    document.documentElement.style.setProperty(
      "--Color-Primary-100",
      SelectedTheme.palette[1],
    );
    document.documentElement.style.setProperty(
      "--Color-Primary-200",
      SelectedTheme.palette[2],
    );
    document.documentElement.style.setProperty(
      "--Color-Primary-300",
      SelectedTheme.palette[3],
    );
    document.documentElement.style.setProperty(
      "--Color-Primary-400",
      SelectedTheme.palette[4],
    );
    document.documentElement.style.setProperty(
      "--Color-Primary-500",
      SelectedTheme.palette[5],
    );
    document.documentElement.style.setProperty(
      "--Color-Primary-600",
      SelectedTheme.palette[6],
    );
    document.documentElement.style.setProperty(
      "--Color-Primary-700",
      SelectedTheme.palette[7],
    );
    document.documentElement.style.setProperty(
      "--Color-Primary-800",
      SelectedTheme.palette[8],
    );
    document.documentElement.style.setProperty(
      "--Color-Primary-900",
      SelectedTheme.palette[9],
    );
    document.documentElement.style.setProperty(
      "--Color-Primary-950",
      SelectedTheme.palette[10],
    );
    document.documentElement.style.setProperty(
      "--Text--primary",
      SelectedTheme.palette[5],
    );
    document.documentElement.style.setProperty(
      "--Text--secundary",
      SelectedTheme.palette[10],
    );
    
  }, [SelectedTheme]);

  return (
    <div className="mt-6 flex flex-wrap items-center justify-around gap-2">
      {ThemeColors.map((item: switchtheme, i: number) => (
        <button
          onClick={() => setColorTheme(item)}
          key={item.id}
          style={{ background: item.colorhex }}
          className={`relative grid h-6 min-w-6 place-items-center rounded-full transition duration-300 hover:scale-110 hover:cursor-pointer`}
        >
          <span className="absolute grid h-6 min-w-6 place-items-center text-white">
            {item.id === SelectedTheme.id && <LuCheck size={18} />}
          </span>
        </button>
      ))}
    </div>
  );
}

export default Switchtheme;
