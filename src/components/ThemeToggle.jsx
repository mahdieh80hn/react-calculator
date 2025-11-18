export default function ThemeToggle({ isDark, toggle }) {
  return (
    <button
      onClick={toggle}
      className="mb-3 px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-sm"
    >
      {isDark ? "Dark" : "Light"}
    </button>
  );
}
