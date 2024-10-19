import React from 'react'
import { useTheme, useThemeUpdate } from './2_CustomHook'

export default function ContextComponent() {
    // use the custom hooks we declared
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();

    // or if we passed them in one object
    // const { darkTheme, toggleTheme } = useTheme();

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

    return (
        <>
            <button onClick={toggleTheme}>Toggle theme</button>
            <div style={themeStyles}>Context Component</div>
        </>
    )
}
