import { useState } from "react"

export default function useCalculatorState() {
    const [currentInput, setCurrentInput] = useState("")
    const [previousInput, setPreviousInput] = useState("")
    const [operator, setOperator] = useState(null)

    return {
        currentInput,
        previousInput,
        operator,
        setCurrentInput,
        setPreviousInput,
        setOperator
    }
}