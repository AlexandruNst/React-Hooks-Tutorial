import React, { useDebugValue, useState } from 'react'

export default function useStateCustom(val) {

    const [state, setState] = useState(val);

    // --- useDebugValue() hook ---

    // Here we defined a custom hook. This doesn't do anything
    // really, just returns the state hook stuff. The point is,
    // this is a custom hook.

    // useDebugValue() works ***only in custom hooks***

    // Also, this is mainly useful when inspecting on
    // the 'Components' tab.

    // if no useDebugValue() is used, the Custom hook
    // will show blank there, and we have to click
    // and scroll through (potentially) many states
    // juggled by our custom hook
    // Like:
    // hooks:
    //      StateCustom:
    //          state1:
    //          state2:
    //          state3:
    //          Effect:
    //          Callback:

    useDebugValue(state);

    // With useDebugValue() we make the important thing(s)
    // show at the top

    // hooks:
    //      StateCustom: 0
    //      ...the rest

    // This also updates in real time as the state
    // changes! Useful for debugging

    // So, use useDebugValue() to decide what value to show
    // next to the custom hook.

    // If wanted, can show multiple. The Inspector will show
    // them as an array

    // hooks:
    //      StateCustom: [0, <other state>, <other state>]
    //      ...the rest

    // Also, useDebugValue() isn't just for state

    // I could write useDebugValue(val) which is the parameter
    // I could write useDebugValue("Hi")

    // Those will show in an array after my custom hook
    // in the Inspect > Components

    // Gotcha - keep in mind, this is still going to run
    // even in production, even when not inspecting
    // If the value we plug in useDebugValue()
    // is slow to calculate, that will slow the UX
    // But if you still want to show something...

    useDebugValue(state, v => verySlowFunction(v))
    // this says the state is passed as this v (can be any name) to 
    // the function version of useDebugValue()

    // By using the function version, we're telling React
    // 1. Only run this in dev
    // 2. Only run this when I have the dev tools up
    //    to see what the result value is
    // (not only when dev tools are open, but when *specifically*
    // looking into this Custom Hook)
    // Otherwise, don't run

    return [state, setState];
}

function verySlowFunction(value) {
    for (let i = 0; i < 1000000; i++) { }
    return value
}