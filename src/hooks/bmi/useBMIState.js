import React, { useState } from 'react'

export default function useBMIState() {
    const [bmi, setBmi] = useState(null)
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("")
    const [status, setStatus] = useState("")
    return ({
        bmi,
        weight,
        height,
        status,
        setBmi,
        setHeight,
        setWeight,
        setStatus
    })
}
