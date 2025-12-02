import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem("calc-theme");

    if (saved === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else if (!saved) {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Apply theme + save to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("calc-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
