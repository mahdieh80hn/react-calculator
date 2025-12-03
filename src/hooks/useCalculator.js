import { useState } from "react"
import { useHistoryCalc } from "../context/HistoryContext"

export default function useCalculator() {
    const [currentInput, setCurrentInput] = useState("")
    const [previousInput, setPreviousInput] = useState("")
    const [operator, setOperator] = useState(null)

    const { addHistory } = useHistoryCalc()

    const handleClick = (value) => {
        if (value === "C") {
            setCurrentInput("")
            setPreviousInput("")
            setOperator(null)
            return
        }

        if (value === "Del") {
            setCurrentInput(currentInput.slice(0, -1))
            return
        }

        if (!isNaN(value) || value === ".") {
            setCurrentInput(currentInput + value)
            return
        }

        if (["+", "-", "*", "/"].includes(value)) {
            if (currentInput === "") return

            setOperator(value)
            setPreviousInput(currentInput)
            setCurrentInput("")
            return
        }

        // percent

        if (value === "%") {
            if (currentInput === "") return

            const curr = parseFloat(currentInput)

            if (!operator) {
                setCurrentInput(String(curr / 100))
                return
            }

            const prev = parseFloat(previousInput)
            let percentValue = curr

            if (operator === "+" || operator === "-") {
                percentValue = (prev * curr) / 100
            }

            if (operator === "*" || operator === "/") {
                percentValue = curr / 100
            }
            setCurrentInput(String(percentValue))
            return
        }

        // +/-

        if (value === "+/-") {
            if (currentInput === "") return

            if (currentInput.startsWith("-")) {
                setCurrentInput(currentInput.slice(1))
            } else {
                setCurrentInput("-" + currentInput)
            }
            return
        }


        // calculation
        if (value === "=") {
            if (!operator || currentInput === "") return

            const prev = parseFloat(previousInput)
            const curr = parseFloat(currentInput)

            let result = 0

            switch (operator) {
                case "+":
                    result = prev + curr
                    break;
                case "-":
                    result = prev - curr
                    break;
                case "*":
                    result = prev * curr
                    break;
                case "/":
                    result = prev / curr
                    break;
                default:
                    break;
            }
            addHistory({
                expression: `${prev} ${operator} ${curr}`,
                result,
            });
            setCurrentInput(String(result))
            setPreviousInput("")
            setOperator(null)
        }
    }

    return {
        currentInput,
        previousInput,
        operator,
        handleClick
    }
}