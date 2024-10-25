import React, { useImperativeHandle, useRef, forwardRef } from 'react'

const CustomInput = (props, ref) => {

    // here, inputRef is the actual ref to the input HTML element
    // which we can interact with directly

    const inputRef = useRef();

    // useImperativeHandle(ref, () => {...}) says: 
    // “Hey parent, here are two things you can do 
    // with this input: focus and clear.”

    // 1st arg -> the ref passed next to props
    // if destructing props, it would look like
    // ({prop1, prop2}, ref). It's not *inside* props,
    // it's next to it.

    // 2nd arg -> a bit more complicated. it's a function, that
    // returns an object that contains multiple other functions.
    // These are the bits of functionality the child is 
    // exposing to the parent

    // 3rd optional arg -> an array of dependencies, similar
    // to useEffect. 
    // No dep -> refresh every render
    // [] -> just once
    // [dep] -> when dependency changes

    useImperativeHandle(ref, () => {
        return {
            focus: () => inputRef.current.focus(),
            clear: () => (inputRef.current.value = "")
        }
    }, [])

    return (
        <input ref={inputRef} />
    )
}

// ***ALSO VERY IMPORTANT***

// The ref argument won't work for our component unless we
// use forwardRef

// this is done in 2 ways

// The way I have set up here
// const CustomInput = (props, ref) => {}
// ...
// export default forwardRef(CustomInput)

// OR

// const CustomInput = forwardRef((props, ref) => {}) -careful with ()-
// ...
// export default CustomInput

export default forwardRef(CustomInput)
