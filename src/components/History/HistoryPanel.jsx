import { useHistoryCalc } from "../../context/HistoryContext";
import { useTheme } from "../../context/ThemeContext";

export default function HistoryPanel() {
  const { history, clearHistory } = useHistoryCalc();
  const { theme } = useTheme();

  return (
    <div className={`mt-6 w-80 p-4 rounded-xl shadow-md
      ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
      
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold">History</h2>
        <button
          onClick={clearHistory}
          className="px-2 py-1 text-sm bg-red-500 text-white rounded"
        >
          Clear
        </button>
      </div>

      {history.length === 0 ? (
        <p className="text-gray-400 text-sm">No history yet</p>
      ) : (
        <ul className="space-y-2">
          {history.map((h, i) => (
            <li key={i} className="border-b pb-1">
              <div className="text-sm">{h.expression}</div>
              <div className="font-semibold">= {h.result}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
