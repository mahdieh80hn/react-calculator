import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

export default function Sidebar() {
  const { theme } = useTheme()

  const linkClasses = ({ isActive }) =>
    `block px-4 py-2 rounded-md transition ${
      isActive
        ? "bg-blue-500 text-white"
        : theme === "dark"
        ? "text-gray-300 hover:bg-gray-700"
        : "text-gray-700 hover:bg-gray-200"
    }`

  return (
    <div
      className={`w-56 h-screen fixed top-0 left-0 z-0 flex flex-col gap-2 p-4 border-r ${
        theme === "dark"
          ? "bg-gray-900 border-gray-700 text-white"
          : "bg-white border-gray-200"
      }`}
    >
      <h2 className="text-xl font-semibold mb-4">
        Tools
      </h2>

      <NavLink to="/" className={linkClasses}>
        Calculator
      </NavLink>

      <NavLink to="/bmi" className={linkClasses}>
        BMI Calculator
      </NavLink>

      <NavLink to="/bmr" className={linkClasses}>
        BMR Calculator
      </NavLink>

      <NavLink to="/bodyfat" className={linkClasses}>
        Body Fat
      </NavLink>

      <NavLink to="/history" className={linkClasses}>
        History
      </NavLink>
    </div>
  )
}
