import React, { useContext } from 'react'
import { ThemeContext } from './1_UseContextHook'

export default function ContextComponent() {
    // 3rd part of the Context - useContext()
    // This gives us access to the contents of the context
    const darkTheme = useContext(ThemeContext);

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

    return (

        <div style={themeStyles}>Context Component</div>
    )
}
