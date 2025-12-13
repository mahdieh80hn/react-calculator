import ButtonsPanel from "./ButtonsPanel";
import { useTheme } from "../../context/ThemeContext";
import useCalculator from "../../hooks/calculator/useCalculator";
import Display from "./Display";

export default function Calculator() {
    const { theme } = useTheme
    const { currentInput, previousInput, operator, handleClick } = useCalculator()
    return (
        <div className={`${theme === "dark" ? "bg-gray-800" : "bg-gray-100"} p-4 rounded-xl w-80 shadow-xl`}>
            {/* Display */}
            {<Display currentInput={currentInput} previousInput={previousInput} operator={operator} />}

            {/* Buttons */}
            <ButtonsPanel handleClick={handleClick} />
        </div>
    )
}