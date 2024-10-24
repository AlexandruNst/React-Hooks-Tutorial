import React, { useState, useEffect, useLayoutEffect } from 'react'

export default function UseLayoutEffectHook() {
    const [count, setCount] = useState(0);

    // --- useLayoutEffect() hook ---

    // The difference between useEffect() and useLayoutEffect()
    // is subtle

    // useEffect() - pass a function and an array of dependencies,
    // when one of the dependencies changes, run the function -
    // IMPORANT - ***asynchronously***

    // once count changes, the effect is run in the background
    // and can happen at any point, independent of the DOM
    // re-render

    useEffect(() => {
        console.log(count);
    }, [count]);

    // useLayoutEffect is -
    // IMPORTANT - ***synchonous***
    // The function runs
    // BETWEEN REACT CALCULATES THE DOM AND WHEN IT PAINTS IT
    // ONTO THE SCREEN

    useLayoutEffect(() => {
        console.log(count);
    }, [count]);

    // This is VERY useful if some effect is based on 
    // the layout of the DOM
    // Example here would be moving things in the DOM
    // that are visible to the eye. You want these
    // to take place AFTER the DOM is calculated, not before
    // Otherwise, what happens is, they go in an "initial"
    // place, then the DOM finishes calculating and it
    // flashes into the new place.

    // Gotcha - it's not as performant. It happens synchronously.
    // Only use useEffect() when necesarry.

    return (
        <>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
            <div>{count}</div>
        </>
    )
}
