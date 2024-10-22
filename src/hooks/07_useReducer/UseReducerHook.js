import React, { useState, useReducer } from 'react'

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

export default function UseReducerHook() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(prev => prev + 1);
    }

    function decrement() {
        setCount(prev => prev - 1);
    }

    // --- useReducer() hook ---

    // useReducer() is just a way to manage more complex state
    // and re-render the component when the state changes.
    // The idea is it gives you more concrete way to handle
    // complex state, with set actions that determine the
    // new state

    // First argument is the function that gives the new state
    // based on the action
    function reducer(state, action) {
        switch (action.type) {
            case ACTIONS.INCREMENT:
                return { count: state.count + 1 }
            case ACTIONS.DECREMENT:
                return { count: state.count - 1 }
            default:
                return state
        }
    }
    // Pro tip: good practice to add a default state which
    // just returns the same state. Meaning, an invalid
    // action doesn't affect state

    // Second argument is our state
    // We use an object for state just because it's more similar
    // to real life. Most likely useReducer() will be used to
    // handle more complex state held in objects. But just a
    // initial value of 0 instead of {count: 0} would work fine
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    // Returns: our state, and a function dispatch
    // Dispatch is what we call to update the state

    // So call dispatch like dispatch(action), and the
    // hook then runs reducer() function with that action
    // and current state
    // Objects, again, for fanciness. Could just do
    // disptach('increment') and above switch(action)

    // ==================================================
    // function incrementReducer() {
    //     dispatch({ type: 'increment' });
    // }

    // function decrementReducer() {
    //     dispatch({ type: 'decrement' });
    // }
    // ==================================================

    function incrementReducer() {
        dispatch({ type: ACTIONS.INCREMENT });
    }

    function decrementReducer() {
        dispatch({ type: ACTIONS.DECREMENT });
    }

    // Pro tip: Good practice to remove magic strings
    // and add them to a global constant variable. Safer.


    return (
        <>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
            <div></div>
            <button onClick={decrementReducer}>-</button>
            <span>{state.count}</span>
            <button onClick={incrementReducer}>+</button>
        </>
    )
}
