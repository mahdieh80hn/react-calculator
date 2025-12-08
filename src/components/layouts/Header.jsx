import ThemeToggle from "../shared/ThemeToggle";
import { useTheme } from "../../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header
      className={`fixed top-0 right-0 h-14 flex items-center justify-end px-4 border-b z-10
        ${theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}
      `}
      style={{ left: "14rem" }}
    >
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </header>
  );
}
