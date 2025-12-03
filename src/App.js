import { useTheme } from "./context/ThemeContext";
import Header from "./components/layouts/Header";
import Calculator from "./components/Calculator/Calculator";
import HistoryPanel from "./components/History/HistoryPanel";

function App() {
  const {theme}= useTheme()

  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen flex flex-col items-center justify-center p-4`}>
      <Header/>
      <Calculator/>
      <HistoryPanel/>
    </div>
  );
}
export default App;