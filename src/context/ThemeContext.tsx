import React, { createContext, useEffect, useReducer } from "react";
import { Appearance, AppState, useColorScheme } from "react-native";
import { darkTheme, lightTheme, themeReducer, ThemeState } from "./themeReducer";

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: ()=> void;
    setLightTheme: ()=> void;
}

export const ThemeContext = createContext( {} as ThemeContextProps );

export const ThemeProvider = ({ children }: any) =>{

    const colorScheme = useColorScheme();

    const [ theme, dispatch ] = useReducer( themeReducer, (colorScheme ==='dark') ? darkTheme : lightTheme );

    useEffect(() => {
        AppState.addEventListener( 'change', ( status )=>{
            if( status === 'active' ){
                (Appearance.getColorScheme() === 'light')
                    ? (setLightTheme())
                    : (setDarkTheme())
            }
        })
    }, []);


    // solo  funciona en ios
    // useEffect(() =>{
    //     (colorScheme === 'light')
    //         ? (setLightTheme())
    //         : (setDarkTheme())
    // }, [ colorScheme ])

    const setDarkTheme = () =>{
        dispatch({ type: 'set_dark_theme' })
        console.log('negro')
    }

    const setLightTheme = () =>{
        dispatch({ type: 'set_light_theme' })
        console.log('blanco')
    }
    return(
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme,
        }}>
            { children }
        </ThemeContext.Provider>
    )
}