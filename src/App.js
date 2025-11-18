import { cloneElement, useState } from "react";
import Button from "./components/Button";
import Display from "./components/Display";



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
        {<Display currentInput={currentInput} previousInput={previousInput} operator={operator}/>}

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((title, index) => (
            <Button
            key={index}
            title={title}
            onClick={() => handleClick(title)}/>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;