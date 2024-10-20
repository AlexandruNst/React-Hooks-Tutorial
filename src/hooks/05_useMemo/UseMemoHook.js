import React, { useState, useEffect, useMemo } from 'react'

export default function UseMemoHook() {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    // --- useMemo() hook ---

    // USE CASE 1: 
    // Used to memoize the result of slow functions

    // ==================================================
    // const doubleNumber = slowFunction(number);
    // ==================================================

    // With the above, when clicking the button to update the theme,
    // the whole component re-renders, meaning the slow function
    // is re-ran at *every* re-render

    // useMemo allows us to cache the output of the 
    // function that always returns the same output for
    // the same input

    const doubleNumber = useMemo(() => { return slowFunction(number) }, [number]);

    // So this way, only when number changes, we need to re-run the
    // code inside the useMemo() hook. This saves us
    // having to re-run expensive functions at each render,
    // given the data hasn't changed.
    // => We run the slow code ONLY WHEN WE HAVE TO


    // Then why not just memo eveything?
    // Performance and memory overhead
    // 1. You call an additional function each render (useMemo())
    // 2. The results are stored somewhere. More memo => more memory

    // So only use useMemo() when you actually NEED the 
    // performance benfits, when the function is really slow

    // USE CASE 2:
    // Referential equality
    // i.e. comparing 2 different vars in JS with the same contents
    // will say different, because the reference is not the same
    // i.e. because they are *different objects*, JS will interpret
    // them as different, and will not check the contents

    // ==================================================
    // const themeStyles = {
    //     backgroundColor: dark ? 'black' : 'white',
    //     color: dark ? 'white' : 'black'
    // }
    // const themeStyles2 = {
    //     backgroundColor: dark ? 'black' : 'white',
    //     color: dark ? 'white' : 'black'
    // }
    // ==================================================

    // The above are different, despite contents being the same

    // let's try to run an effect every time the style changes

    // ==================================================
    // const themeStyles = {
    //     backgroundColor: dark ? 'black' : 'white',
    //     color: dark ? 'white' : 'black'
    // }
    // 
    // useEffect(() => {
    //     console.log('Theme changed');
    // }, [themeStyles])
    // ==================================================

    // This effect will trigger even if we don't click the change
    // theme button, it will trigger even on changing the number.
    // This is because at each render, a new themeStyle object
    // is created, and although contents are the same, the reference
    // is different, meaning React inteprets that as a change of
    // the dependencies for useEffect() and the effect runs.

    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark])

    useEffect(() => {
        console.log('Theme changed');
    }, [themeStyles])

    // This ensures the reference of the object remains the same
    // as last time, unless the internal data of that object
    // has changed since last render. So effect will run just
    // on changing the theme now

    return (
        <>
            <input
                type='number'
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prev => !prev)}>Change theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    )
}

function slowFunction(number) {
    for (let i = 0; i < 1000000000; i++) { }
    return number * 2;
}
