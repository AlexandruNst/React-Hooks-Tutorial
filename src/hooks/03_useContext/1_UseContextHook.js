import React, { useState } from 'react'
import ContextComponent from './1_ContextComponent';

// --- useContext() hook ---
// This gives us a context to use in the rest of our app
export const ThemeContext = React.createContext();

export default function UseContextHook() {

    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme() {
        setDarkTheme(prevTheme => !prevTheme);
    }

    // Can then pass that context down to children components
    // This is done via the 2nd part of the Context - the Provider
    // This has a single prop "value" to hold your context
    // only one prop, but it can be an array or an object
    // This will then be available to ALL components served by
    // the provider, and all their children recursively
    // Allows to pass down props recursively, without having
    // to manually pass them down multiple generations
    return (
        <>
            <div>
                <ThemeContext.Provider value={darkTheme}>
                    <button onClick={toggleTheme}>Toggle theme</button>
                    <ContextComponent />
                </ThemeContext.Provider>
            </div>
        </>
    )
}
