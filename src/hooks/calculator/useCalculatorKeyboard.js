import { useEffect } from "react"

export default function useCalculatorKeyboard(handleClick) {
    useEffect(() => {
        const handleKeyPress = (e) => {
            const key = e.key

            if (!isNaN(key) || key === ".") {
                handleClick(key)
            }

            if (["+", "-", "*", "/"].includes(key)) {
                handleClick(key)
            }

            if (key === "Enter") {
                e.preventDefault()
                handleClick("=")
            }

            if (key === "Backspace") {
                handleClick("Del")
            }

            if (key === "Escape") {
                handleClick("C")
            }

            if (key === "%") {
                handleClick("%")
            }
        }

        window.addEventListener("keydown", handleKeyPress)
        return () => {
            window.removeEventListener("keydown", handleKeyPress)
        }
    }, [handleClick])
}
