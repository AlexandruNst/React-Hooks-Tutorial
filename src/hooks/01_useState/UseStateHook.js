import React, { useState } from 'react'

export default function UseStateHook() {
    // All hooks cannot be inside if statements, inside functions,
    // inside loops, or nested in anything. Must be at top level of
    // a function component. Will also not work in a class
    // component

    // This is because React requires the hooks in a component
    // to run in the *exact same order* every time. Conditionals
    // make that not possible, as sometimes a hook is run
    // sometimes it's not, messing with the order

    // --- useState() hook ---

    // useState hook returns an array, where 1st element is
    // the current state, the 2nd element is a function that
    // allows to change that current state
    const [count, setCount] = useState(4);

    // These are actually incorrect, because they reference 
    // the current count always. So for e.g. if we have two hooks
    // that update the state at the same time, they won't stack - 
    // they'll both update the same state, and only one will 
    // take effect.
    function decrementCountIncorrect() {
        setCount(count - 1);
    }

    function incrementCountIncorrect() {
        setCount(count + 1);
    }


    // This version ensures the next hook call will get the prev value
    // from the prev run hook. Ensures we can run multiple hooks
    // one after another at the same time, and stack.

    // *Always* use the function version of useState, when the
    // new state depends on the previous state
    function decrementCount() {
        setCount(prevCount => prevCount - 1);
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1);
    }


    // Another thing to know is setting the state using
    // a function call. What this does is it ensures the
    // state is set only once when the component first renders.
    // This is useful in the case when the initial state is
    // a result of a function call. By setting the state with
    // a function that calls the other function, that will
    // ran only once, at render time.
    const [state, setState] = useState(() => {
        console.log("Run only once");
        return 4;
    });


    // This way, the function will re-run at each render
    // making it way less efficient, especially if that
    // function is computationally expensive
    function stateFunc() {
        console.log("Run every time");
        return 4;
    }

    const [stateTwo, setStateTwo] = useState(stateFunc());

    // For object states updates, make sure to spread the
    // prev object before updating the entry you want, otherwise
    // the whole object will just be replaces with that one
    // updated entry
    const [obj, setObj] = useState({ count: 4, theme: 'blue' });
    function incrementObjCount() {
        setObj(prevObj => {
            return { ...prevObj, count: prevObj.count + 1 };
        })
    }

    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </>
    );
}
