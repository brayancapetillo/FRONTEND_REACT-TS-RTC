import { ThemeState } from "../../interfaces/theme/Theme.interface";
import { switchtheme } from "../../interfaces/theme/switchtheme/switchtheme";


type ThemeAction =
    { type: 'ChangeSidebar', payload: { isSidebarOpen: boolean } } |
    { type: 'ChangeTheme', payload: { isDarkTheme: boolean } } |
    { type: 'ChangeSettigs', payload: { isSettingsOpen: boolean } } |
    { type: 'ChangeThemeColor', payload: { SelectedTheme: switchtheme } } 

const ThemeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {


    switch (action.type) {
        case 'ChangeSidebar':
            return { ...state, isSidebarOpen: !action.payload.isSidebarOpen };

        case 'ChangeTheme':
            return { ...state, isDarkTheme: !action.payload.isDarkTheme };

        case 'ChangeSettigs':
            return { ...state, isSettingsOpen: !action.payload.isSettingsOpen };

        case 'ChangeThemeColor':
            return { ...state, SelectedTheme: state.SelectedTheme = action.payload.SelectedTheme };

        default:
            return state;


    }


}

export default ThemeReducer;