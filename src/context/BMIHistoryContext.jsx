import { createContext, useContext, useEffect, useState } from 'react'
const BMIHistoryContext = createContext()

export default function BMIHistoryProvider({children}) {
    const [bmiHistory, setBmiHistory] = useState(() => {
        const saved = localStorage.getItem("bmi-history")
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem("bmi-history", JSON.stringify(bmiHistory))
    }, [bmiHistory])

    const addBMIRecord = (bmi) => {
        const record = {
            id: crypto.randomUUID,
            date: new Date().toLocaleDateString(),
            bmi: Number(bmi)
        }
        setBmiHistory((prev) => [...prev, record])
        console.log("record", record);
        console.log("bmi", bmi)
        
    }
  return (
    <BMIHistoryContext.Provider value={{ bmiHistory, addBMIRecord}}>
        {children}
    </BMIHistoryContext.Provider>
  )
}

export function useBMIHistory() {
    return useContext(BMIHistoryContext)
}
