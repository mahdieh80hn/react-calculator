import { useTheme } from "../../context/ThemeContext";
import ThemeToggle from "../ThemeToggle";


export default function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="w-full h-14 bg-gray-300 fixed top-0 flex items-center justify-end px-4">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme}/>
        </div>
    );
}
