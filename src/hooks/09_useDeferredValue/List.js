import React, { useMemo, useDeferredValue } from 'react'

export default function List({ input }) {

    // --- useDeferredValue() hook ---

    // We are in a similar position as with the useTransition() hook
    // We have an input box, creating 20,000 list elements. 
    // Input is sluggish.

    // The unique scenario here is, (pretend) we don't have
    // access to the input state to modify, like for example
    // it's handled by a library etc.

    const list = useMemo(() => {
        const l = [];
        for (let i = 0; i < 20000; i++) {
            l.push(<div key={i}>{input}</div>)
        }
        return l;
    }, [input]);

    // The useDeferredValue() hook works similarly to 
    // throttling. i.e. it will wait for changes to finish
    // before it returns the new value. If you type multiple keys
    // at once (i.e. state changes quickly) it will wait, once it
    // waited and nothing changed recently, it will return
    // one value equal to the latest update

    // We use the hook to tell React what value we want
    // to throttle
    const deferredInput = useDeferredValue(input);

    // And then use that instead of the og value
    const listDeferredValue = useMemo(() => {
        const l = [];
        for (let i = 0; i < 20000; i++) {
            l.push(<div key={i}>{deferredInput}</div>)
        }
        return l;
    }, [deferredInput]);

    // This will, just like useTransition(), case extra renders
    // One render will be to update input state, second render
    // will be once React (which is smart) figures the deferred
    // state hasn't changed in a while, returns the new state,
    // which triggers the useMemo() to change the var and 
    // re-render the component

    // This shines when you don't have the ability to change
    // how state is set.

    return listDeferredValue;
}
