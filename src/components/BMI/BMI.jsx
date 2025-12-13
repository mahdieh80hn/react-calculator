import useBMI from '../../hooks/bmi/useBMI'
import BMIChart from './BMIChart'

export default function BMI() {
    const { weight, setWeight, height, setHeight, bmi, status, calculateBMI } = useBMI()
    return (
        <div className='flex gap-16 items-center justify-center w-full px-72'>
            <div >
            <h1 className="text-2xl font-bold mb-4">BMI Calculator</h1>
            <div className="flex flex-col gap-4">
                <input
                    type="number"
                    inputMode="decimal"
                    placeholder="Weight (kg)"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="p-2 rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
                />
                <input
                    type="number"
                    inputMode="decimal"
                    placeholder="Height (cm)"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="p-2 rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
                />
                <button
                    onClick={calculateBMI}
                    className="p-3 rounded bg-blue-600 text-white font-semibold"
                >
                    Calculate
                </button>
                {bmi && (
                    <div className="mt-4 p-4 rounded bg-gray-200 text-gray-900">
                        <p className="text-lg">
                            <strong>BMI:</strong> {bmi}
                        </p>
                        <p>
                            <strong>Status:</strong> {status}
                        </p>
                    </div>
                )}
            </div>
        </div>
            <BMIChart/>
        </div>
    )
}
