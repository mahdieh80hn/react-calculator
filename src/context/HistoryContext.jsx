import { createContext, useContext, useEffect, useState } from "react";

const HistoryContext = createContext()

export function HistoryProvider({ children }) {
    const [history, setHistory] = useState([])
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {

        const saved = localStorage.getItem("calc-history")
        if (saved) {
            setHistory(JSON.parse(saved))
        }
        setLoaded(true)

    }, [])

    useEffect(() => {
        if(loaded){
            localStorage.setItem("calc-history", JSON.stringify(history))
        } 
    }, [history, loaded])

    const addHistory = (item) => {
        setHistory((prev) => [item, ...prev])
    }

    const clearHistory = () => setHistory([])

    return (
        <HistoryContext.Provider value={{ history, addHistory, clearHistory }}>
            {children}
        </HistoryContext.Provider>
    )
}

export function useHistoryCalc() {
    return useContext(HistoryContext)
}