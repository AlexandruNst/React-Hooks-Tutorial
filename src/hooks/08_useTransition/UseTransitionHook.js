import React, { useState, useTransition } from 'react'

export default function UseTransitionHook() {

    const [input, setInput] = useState('');
    const [list, setList] = useState([]);

    // --- useTransition() hook ---

    // So what's happening here? We're updating 2 states
    // at the same time, one is fast (setInput()) and other
    // really slow (setList()).
    // This can lead to a very slow and sluggish experience
    // when typing in the input. 

    // The idea here is *prioriry*. By default, all state 
    // changes are high-priority and React will only 
    // re-render the component when all high-priority
    // states are changed. It will combine them together
    // and only re-render once.

    function handleChange(e) {
        setInput(e.target.value);
        const l = [];
        for (let i = 0; i < 20000; i++) {
            l.push(e.target.value);
        }
        setList(l);
    }

    // useTransition() is a way to tell React which
    // functionality is low-priority. This way,
    // the high-priority (fast) state can change first
    // and be re-rendered immediately, while the low-priority (slow)
    // state changes in the background and is re-rendered when ready

    const [isPending, startTransition] = useTransition();

    function handleChangeTransition(e) {
        setInput(e.target.value);

        startTransition(() => {
            const l = [];
            for (let i = 0; i < 20000; i++) {
                l.push(e.target.value);
            }
            setList(l);
        })
    }

    // GOTCHA -  use only when absolutely necessary.
    // useTransition() will cause the component/app
    // to do more renders than normal

    // So for the example above, previously, the app
    // needed to re-render just once, with both
    // setInput() and setList() done. Using the 
    // useTransition hook, the app will do 2 separate
    // renders - one for the input change, one for list change.
    // In reality, you want small changes that happen
    // at once, let them happen at once, to limit the times
    // the app needs to re-render

    // Bonus - can also use the isPending property from the hook to
    // check if the transition finished, and based on that we
    // can render a loading component

    return (
        <>
            <input type='text' value={input} onChange={handleChangeTransition} />
            {isPending ? <div>Loading...</div> : list.map((l, idx) => <div key={idx}>{l}</div>)}
        </>
    )
}
