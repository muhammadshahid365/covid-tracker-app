import React, { createContext, useEffect, useState } from 'react'



export default function DataStore() {
    const [wholeData, setWholeData] = useState({})
    useEffect(() => {
        fetch("https://api.covid19api.com/summary")
            .then(res => res.json()).then(json=> setWholeData(json))
    }, [])

    const dataContext = createContext([])
}