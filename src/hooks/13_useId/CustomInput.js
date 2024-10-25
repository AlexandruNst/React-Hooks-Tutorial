import React, { useId } from 'react'

export default function CustomInput() {

    // --- useId() hook ---
    // it's a hook that generated unique IDs
    // for HTML elements

    // so for example here, if we need two of these on the App
    // (say one at the top for a newsletter signup, one at
    // the bottom for a contact section), both inputs have the 
    // id 'email' and the both labels would select the top input


    // ===========================================
    // return (
    //     <>
    //         <label htmlFor='email'>Email</label>
    //         <input id='email' type='email' />
    //         <br />
    //     </>
    // )
    // ===========================================


    // use useId() to generate a unique id for each component

    const id = useId();

    return (
        <>
            <label htmlFor={id}>Email</label>
            <input id={id} type='email' />
            <br />
        </>
    )

    // Also if you have multiple inputs, don't do more useId()'s
    // use one and differentiate them via JS

    // <label htmlFor={`${id}-email`}>Email</label>
    // <input id={`${id}-email`} type='email' />
    // <label htmlFor={`${id}-name`}>Name</label>
    // <input id={`${id}-name`} type='text' />

    // this is just to increase performance, since you 
    // call useId() only once


    // WHY NOT USE useId() TO GENERATE KEY FOR LIST ITEMS?

    // "These are actually not for the same purpose. uuid can generate 
    // unique ids on the fly at any point you want (on button click, 
    // on form submit, on component render, in a loop, etc). useId() on 
    // the other hand can only create ids when a component is rendered. 
    // You cannot create an id in a loop, on form submit, etc. 
    // useId is really only meant to be used as the id attribute 
    // of an HTML element or as another HTML attribute that links 
    // to that id such as the for attribute."
}
