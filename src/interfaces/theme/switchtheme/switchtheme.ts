import { ThemeColor } from "../../../constants/theme/ColorTheme"

export interface switchtheme {
    id: number,
    color: string,
    colorhex: string,
    palette: string[],
}

export type ColorTheme = (typeof ThemeColor)[keyof typeof ThemeColor]