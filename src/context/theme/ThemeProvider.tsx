import { useReducer } from "react";
import { Props, ThemeState } from "../../interfaces/theme/Theme.interface";
import { ThemeContext } from "./ThemeContext";
import ThemeReducer from "./ThemeReducer";
import { switchtheme } from "../../interfaces/theme/switchtheme/switchtheme";
import { ThemeColor } from "../../constants/theme/ColorTheme";

const themeColor: switchtheme[] = ThemeColor;

const initial_State: ThemeState = {
  isSidebarOpen: true,
  isSettingsOpen: false,
  isDarkTheme: true,
  SelectedTheme: themeColor[0],
  paletteColors: themeColor[0].palette,
};

export const ThemeProvider = ({ children }: Props) => {
  const [ThemeState, dispatch] = useReducer(ThemeReducer, initial_State);

  const toggleTheme = () => {
    dispatch({
      type: "ChangeTheme",
      payload: { isDarkTheme: ThemeState.isDarkTheme },
    });
  };

  const toggleSidebar = () => {
    dispatch({
      type: "ChangeSidebar",
      payload: { isSidebarOpen: ThemeState.isSidebarOpen },
    });
  };

  const toggleSettings = () => {
    dispatch({
      type: "ChangeSettigs",
      payload: { isSettingsOpen: ThemeState.isSettingsOpen },
    });
  };

  const setColorTheme = (Theme: switchtheme) => {
    dispatch({
      type: "ChangeThemeColor",
      payload: { SelectedTheme: (ThemeState.SelectedTheme = Theme) },
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        ThemeState,
        toggleTheme,
        toggleSidebar,
        toggleSettings,
        setColorTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
