import React from 'react'
import useStateCustom from './CustomHook'

export default function UseDebugValueHook() {

    // GO TO CUSTOM HOOK FOR EXPLANATION

    const [count, setCount] = useStateCustom(0);

    return (
        <>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </>
    )
}
