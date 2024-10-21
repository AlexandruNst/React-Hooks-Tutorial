import React, { useEffect, useState } from 'react'

export default function List({ getItems }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems());
        console.log('Updated Items');
    }, [getItems])

    return (
        items.map(i => <div key={i}>{i}</div>)
    )
}
