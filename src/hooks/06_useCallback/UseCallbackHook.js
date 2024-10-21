import React, { useState, useCallback } from 'react'
import List from './List';

export default function UseCallbackHook() {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    // ---useCallback() hook ---
    // Very similar to useMemo(), BUT for functions
    // This way, when we change theme, this function is being
    // re-created, thus running the effect (see List object)
    // even though the function is the same. 
    // ==================================================
    // const getItems = () => {
    //     return [number, number + 1, number + 2];
    // }
    // ==================================================

    // Just like useMemo(), we use useCallback() to memoise
    // functions for *referential equality* when using some
    // other hook
    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
    }, [number])

    // USEMEMO AND USECALLBACK DIFF: ---
    // useMemo() returns the return value of the function
    // useCallback() returns the function itself

    // Bottom line: useMemo() to memoise vars, useCallback()
    // to memoise functions

    // Side note, just as useMemo(), one possible use case would
    // also be if creating the function itself could be a slow
    // process. Although that's a very unlikely case, but 
    // technically still a use case.

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }

    return (
        <div style={theme}>
            <input
                type='number'
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark(prev => !prev)}>Toggle theme</button>
            <List getItems={getItems} />
        </div>
    )
}
