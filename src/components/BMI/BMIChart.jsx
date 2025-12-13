import { useBMIHistory } from "../../context/BMIHistoryContext"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function BMIChart() {
    const { bmiHistory } = useBMIHistory()

    if (bmiHistory.length === 0) {
        return <p className="text-center mt-10 opacity-70">No BMI history yet...</p>
    }
    console.log("BMI HISTORY:", bmiHistory);

    return (
        <div className="w-full h-80 mt-8">
            <h3 className="text-xl font-bold text-center mb-4">BMI Progress</h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={bmiHistory}>
                    <Line type="monotone" dataKey="bmi" stroke="#8884d8" strokeWidth={2} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={[10, 40]} />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
