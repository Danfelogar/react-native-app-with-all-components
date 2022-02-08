
import { Theme } from '@react-navigation/native';
import { View, Switch } from 'react-native';

type ThemeAction =
| { type: 'set_light_theme' }
| { type: 'set_dark_theme' }

export  interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark';
    dividerColor: string;

}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rgba(0, 0, 0, 0.12)',
    colors: {
        primary: '#084F6A',
        background: '#fff',
        card: 'rgba(0, 0, 0, 0.54)',
        text: 'rgba(0, 0, 0, 0.87)',
        border: 'rgba(0, 0, 0, 0.04)',
        notification: 'rgba(0, 0, 0, 0.38)',
    }
}

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    dividerColor: 'rgba(255, 255, 255, 0.12)',
    colors: {
        primary: '#75CEDB',
        background: '#121212',
        card: '#fff',
        text: '#fff',
        border: 'rgba(255, 255, 255, 0.08)',
        notification: 'rgba(0, 0, 0, 0.38)',
    }
}

export const themeReducer = ( state: ThemeState, action: ThemeAction ): ThemeState => {

    switch ( action.type ) {
        case 'set_light_theme':
            return{ ...lightTheme }

        case 'set_dark_theme':
            return{ ...darkTheme }
        default:
            return state;
    }
};
