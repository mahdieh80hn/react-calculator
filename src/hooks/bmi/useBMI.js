import useBMILogic from "./useBMILogic"
import useBMIState from "./useBMIState"

export default function useBMI() {
    
    const state = useBMIState()
    const {calculateBMI} = useBMILogic({
      ...state
    })
  return ({
    ...state,
    calculateBMI
  })
}
