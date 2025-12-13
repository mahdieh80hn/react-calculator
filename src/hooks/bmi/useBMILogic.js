export default function useBMILogic({
        bmi,
        weight,
        height,
        status,
        setBmi,
        setHeight,
        setWeight,
        setStatus
    }) {
    const calculateBMI = () => {
        const w = parseFloat(weight)
        const h = parseFloat(height)

        if (Number.isNaN(w) || Number.isNaN(h) || h === 0) {
            setBmi(null)
            setStatus("Please enter valid weight and height")
            return
        }

        const hMeters = h / 100
        const result = w / (hMeters * hMeters)
        const rounded = Math.round(result * 10) / 10 // one decimal
        setBmi(rounded)

        let s = ""
        if (rounded < 18.5) s = "Underweight"
        else if (rounded < 25) s = "Normal"
        else if (rounded < 30) s = "Overweight"
        else s = "Obese"

        setStatus(s)
    }
  return ({
    calculateBMI
  })
}
