import React, { useRef } from 'react'
import CustomInput from './CustomInput'

export default function UseImperativeHandle() {

    // --- useImperativeHandle() hook ---

    // This hook does nothing its name implies (of course
    // why would it??)
    // What is happening is, if we have a child custom component
    // that we want to ref, that is not possible by default
    // Also, that child might have some functionality
    // (in this case, a focus and clear functionality)
    // that the parent doesn't need to know about.

    // We can use the useImperativeHandle() to create specific actions
    // on the input that the parent can call directly, 
    // without needing to know how they work inside.


    // Here in the parent component, we use the ref to get access
    // to the child's special methods (focus and clear)

    // When you click the Focus button, it runs the focus
    // function inside the CustomInput

    // SEE THE CUSTOM INPUT COMPONENT NEXT ->

    const ref = useRef();

    // Btw below, the () => ...focus() is needed, since the 
    // function itself doesn't exist in this file, so JS
    // complains

    return (
        <>
            <CustomInput ref={ref} />
            <button onClick={() => ref.current.focus()}>Focus</button>
            <button onClick={() => ref.current.clear()}>Clear</button>
        </>
    )
}
