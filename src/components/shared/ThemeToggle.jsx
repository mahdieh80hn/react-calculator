export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg bg-gray-600 text-white"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
