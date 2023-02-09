import React from 'react'
import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext({
    theme: 'light',
    setTheme: () => { }
})

export const ThemeContextProvider = ({ children }) => {
    //get the current state saved in localStorage
    const currentTheme = localStorage.getItem('Countries-Theme')
    //set the initial state to 'light' if the Countries-Theme key exists in localStorage
    const [theme, setTheme] = useState(currentTheme ?? 'light')

    //presist the theme state in local storage
    useEffect(() => {
        localStorage.setItem('Countries-Theme', theme)
    }, [theme])

    const value = { theme, setTheme }
    return (

        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}