import { useHistoryCalc } from "../../context/HistoryContext"
import useCalculatorState from "./useCalculatorState"
import useCalculatorLogic from "./useCalculatorLogic"
import useCalculatorKeyboard from "./useCalculatorKeyboard"

export default function useCalculator() {
    const state = useCalculatorState()
    const { addHistory } = useHistoryCalc()
    const { handleClick } = useCalculatorLogic({
        ...state,
        addHistory
    })

    useCalculatorKeyboard(handleClick)

    return {
        ...state,
        handleClick
    }
}