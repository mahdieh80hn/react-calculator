import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import BMI from '../components/BMI/BMI'

export default function BMIPage() {
    const { theme } = useTheme()

    return (
        <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen flex flex-col items-center justify-center p-4`}>
            <BMI />
        </div>
    )
}
