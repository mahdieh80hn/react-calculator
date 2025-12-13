import { useBMIHistory } from "../../context/BMIHistoryContext"
import useBMILogic from "./useBMILogic"
import useBMIState from "./useBMIState"

export default function useBMI() {

  const state = useBMIState()
  const { addBMIRecord } = useBMIHistory()
  
  const { calculateBMI } = useBMILogic({
    ...state,
    addBMIRecord
  })
  return ({
    ...state,
    calculateBMI
  })
}
