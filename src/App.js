import { cloneElement, useState } from "react";



function App() {

  const [currentInput, setCurrentInput] = useState("")
  const [previousInput, setPreviousInput] = useState("")
  const [operator, setOperator] = useState(null)

  const buttons = [
    "C", "/", "*", "Del",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "=",
    "0", ".",
  ];

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

    if(!isNaN(value) || value === "."){
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


    // calculation
    if(value === "="){
      if(!operator || currentInput === "") return

      const prev = parseFloat(previousInput)
      const curr = parseFloat(currentInput)

      let result = 0

      switch (operator){
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
      setCurrentInput(String(result))
      setPreviousInput("")
      setOperator(null)
    }
  }
  return (
    <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-4 rounded-xl w-80">

        {/* Display */}
        <div className="bg-black text-white text-right text-3xl p-4 rounded-lg mb-4 h-16 flex items-center justify-end">
          {currentInput || previousInput || "0"}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={() => handleClick(btn)}
              className="bg-gray-700 hover:bg-gray-600 active:bg-gray-500 transition p-4 text-xl rounded-lg text-white"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;