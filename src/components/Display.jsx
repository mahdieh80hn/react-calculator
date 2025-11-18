export default function Display({ currentInput, previousInput, operator }){
    return (
        <div className="bg-black text-white text-right text-3xl p-4 rounded-lg mb-4 h-16 flex items-center justify-end gap-2">
            <div className="text-gray-400">
                {previousInput && operator ? `${previousInput} ${operator}` : ""}
            </div>

            <div className="text-white text-3xl">
                {currentInput || "0"}
            </div>
        </div>
    )
}