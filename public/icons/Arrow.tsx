'use client'
import { useTheme } from 'next-themes'
import React from 'react'

const ArrowSVG = () => {
    const { theme } = useTheme()

    return (
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H8M17 7V16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: theme === "dark" ? "#ffffff" : "#000000" }} />
        </svg>
    )
}

export default ArrowSVG