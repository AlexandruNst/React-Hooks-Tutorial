import React from 'react'
import CustomComponent from './2_CustomComponent';
import { ThemeProvider } from './2_CustomHook';

export default function UseContextHook() {

    return (
        <>
            <div>
                <ThemeProvider>
                    <CustomComponent />
                </ThemeProvider>
            </div>
        </>
    )
}
