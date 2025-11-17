const buttons = [
  "AC", "DEL", "%", "/",
  "7", "8", "9", "*",
  "4", "5", "6", "-",
  "1", "2", "3", "+",
  "0", ".", "="
];

export default function App() {
  return (
    <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-4 rounded-xl w-80">
        
        {/* Display */}
        <div className="bg-black text-white text-right text-3xl p-4 rounded-lg mb-4 h-16 flex items-center justify-end">
          0
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className="bg-gray-700 hover:bg-gray-600 active:bg-gray-500 transition p-4 text-xl rounded-lg text-white"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
