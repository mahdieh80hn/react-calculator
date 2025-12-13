export function getBMIStatus(bmi) {
  if (bmi < 18.5) return "underweight"
  if (bmi < 25) return "normal"
  if (bmi < 30) return "overweight" 
  return "obese";
}

export function getBMIColor(status) {
  switch (status) {
    case "underweight":
      return "#3b82f6" // blue
    case "normal":
      return "#22c55e" // green
    case "overweight":
      return "#f59e0b" // orange
    case "obese":
      return "#ef4444" // red
    default:
      return "#9ca3af" // gray
  }
}
