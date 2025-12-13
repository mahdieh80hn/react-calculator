
import Calculator from "../components/Calculator/Calculator";
import HistoryPanel from "../components/History/HistoryPanel";
import { useTheme } from "../context/ThemeContext";
export default function CalculatorPage() {
    const {theme}= useTheme()
    return (
        <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen flex flex-col items-center justify-center p-4`}>
            <Calculator />
            <HistoryPanel />
        </div>
    )
}
