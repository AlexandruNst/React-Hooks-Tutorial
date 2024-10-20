import React, { useState, useEffect, useRef } from 'react'

export default function UseRefHook() {
    const [name, setName] = useState('');

    // --- useRef() hook ---

    // Say we want to count how many times we rendered a component
    // const [renderCount, setRenderCount] = useState(0);
    // useEffect(() => setRenderCount(prev => prev + 1));

    // The above would trigger a re-render, since state changes
    // => infinite loop

    // A Ref is very similar to state 
    // It persists between renders of a component
    // BUT - a ref does NOT cause a component to re-update on change

    const renderCount = useRef(1);
    // A Ref doesn't return an array, it returns an object
    // { current: 0 }
    // Updating the current value gets persisted between the renders

    useEffect(() => { renderCount.current = renderCount.current + 1 });
    // The ref is *mutable*, we update it directly, as opposed to
    // state which requires a separate function to update


    // THAT IS ONE USE CASE
    // Another very useful use case is to -

    // Reference elements inside HTML
    // It's as if we used document.querySelector
    // It literally gives you the DOM node (inside .current)
    const inputRef = useRef();

    function focus() {
        inputRef.current.focus();
    }


    return (
        <>
            <input
                value={name}
                onChange={e => setName(e.target.value)}>
            </input>
            <div>My name is {name}</div>
            <div>I rendered {renderCount.current} times</div>

            <button onClick={focus}>Focus</button>
            <input
                ref={inputRef}
            ></input>
        </>
    )
}
