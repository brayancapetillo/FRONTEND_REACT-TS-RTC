import React, { createContext } from "react";
import { ThemeContextProps } from "../../interfaces/theme/Theme.interface";

export const ThemeContext: React.Context<ThemeContextProps> = createContext<ThemeContextProps>({} as ThemeContextProps);
