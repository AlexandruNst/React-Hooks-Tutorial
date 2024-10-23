import React, { useState } from 'react'
import List from './List'

export default function UseDefferdValueHook() {

    // SEE THE LIST COMPONENT FOR EXPLANATION

    const [input, setInput] = useState('');

    return (
        <>
            <input type='text' value={input} onChange={(e => setInput(e.target.value))} />
            <List input={input} />
        </>
    )
}
