import { switchtheme } from "./switchtheme/switchtheme";

export interface Props {
    children: JSX.Element | JSX.Element[]
}

export interface ThemeState {
    isSidebarOpen: boolean,
    isSettingsOpen: boolean,
    isDarkTheme: boolean,
    SelectedTheme: switchtheme,
    paletteColors: string[],
}

export interface ThemeContextProps {
    ThemeState: ThemeState,
    toggleSidebar: () => void;
    toggleTheme: () => void;
    toggleSettings: () => void;
    setColorTheme: (theme: switchtheme) => void;
}