import React, { useState, useEffect } from 'react'

export default function UseEffectHook() {

    const [resourceType, setResourceType] = useState('posts');
    const [dummy, setDummy] = useState(0);
    const [items, setItems] = useState({});
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // --- useEffect() hook ---

    // Used to make code react to state changes
    // Use a 'side-effect'

    // Runs when the component is mounted for the first time 
    // and on every re-render
    // useEffect(() => {})

    // Runs when the component is mounted for the first time alone
    // useEffect(() => {}, [])

    // Runs when the component is mounted for the first time 
    // and whenever the someDependency's value changes.
    // useEffect(() => {}, [someDependency])



    // callback function - EVERY render i.e. on Mount and re-renders
    // so if I click the Dummy button that updates another state
    // which triggers a re-render, this will run
    useEffect(() => {
        console.log('mounted or re-rendered');
    });

    // dependencies array - side-effect only when dependency changes
    // so if I click the Dummy button that updates another state
    // which triggers a re-render, this will NOT run
    useEffect(() => {
        console.log('mounted and dependency changed');
    }, [resourceType])


    // empty dependencies array - run only when mounted
    useEffect(() => {
        console.log('mounted');
    }, [])


    // Use case 1 - when changing state, fetch new data
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}/1`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType])

    // Use case 2 - interact with the DOM
    // Modify a DOM element based on window width
    // To remove the effect on unmount, return a callback function
    // That will be run at unmount
    // Useful to remove event listeners that would otherwise linger
    // after a component is removed, or keep being stacked
    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    function handleResize() {
        setWindowWidth(window.innerWidth);
    }

    // The return codes ALWAYS runs before the effect code.
    // It is essentially clean-up before removal/re-rendering

    // Examples: 
    // addEventListener -> return removeEvent Listener
    // subscribeToAPI -> return unSubscribeToAPI

    // PRO TIP: The return "clean-up" runs only if the 
    // effect itself ran at least once.
    // So it won't try to clean-up the first time the effect runs,
    // since there is nothing to clean up

    return (
        <>
            <div>
                <h2>Window width: {windowWidth}</h2>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
                <button onClick={() => setDummy(dummy + 1)}>Dummy</button>
            </div>
            <h1>{resourceType}</h1>
            <h3>{JSON.stringify(items)}</h3>
        </>
    )
}
