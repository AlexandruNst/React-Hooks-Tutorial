import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

// THIS is the custom hook(s).
// uses the useContext hook inside our custom one
// abstracts away the need to know about ThemeContext/ThemeUpdateContext
export function useTheme() {
    return useContext(ThemeContext);
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext);
}


// This extracts all the context logic in one file

export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme() {
        setDarkTheme(prevTheme => !prevTheme);
    }

    // Same functionality as in the non-custom one
    // We wrap the children in the Provider
    // We just extracted that logic.

    // Now the context consumer just needs this function
    // And the actual logic is abstracted away
    // Easy to change (only needs to be changed in one place) 
    // => and easy to maintain
    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )

    // Also possible with just one context
    // pass both through an object and then destructure
    // return (
    //     <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
    //         {children}
    //     </ThemeContext.Provider>
    // )

}
