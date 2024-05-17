import React, { useState, useEffect } from 'react'

interface Position {
  x: number
  y: number
}

interface CustomCursorProps {
  hoveredColor: string
}

const style: React.CSSProperties = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 999,
  transition: 'transform 0.2s ease',
}

const CustomCursor: React.FC<CustomCursorProps> = ({ hoveredColor }) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // 80 is half the 160 size of the cursor, subtracted to center the cursor in the new custom visual
      setPosition({ x: e.clientX - 80, y: e.clientY - 80 })
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div data-testid="custom-cursor" style={{ ...style, left: position.x, top: position.y }}>
      <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M80 148C117.555 148 148 117.555 148 80C148 42.4446 117.555 12 80 12C42.4446 12 12 42.4446 12 80C12 117.555 42.4446 148 80 148ZM80 160C124.183 160 160 124.183 160 80C160 35.8172 124.183 0 80 0C35.8172 0 0 35.8172 0 80C0 124.183 35.8172 160 80 160Z" fill={hoveredColor}/>
        {/* central white box, added to highlight cursor location */}
        <rect x="75" y="75" width="10" height="10" fill="none" stroke="#FFF" strokeWidth="2"/>
        {/* color code text */}
        <rect x="40" y="103" width="80" height="20" fill="gray" rx="5" />
        <text x="80" y="115" dominantBaseline="middle" textAnchor="middle" fill="#FFF" fontSize="14px">{hoveredColor}</text>
      </svg>
    </div>
  )
}

export default CustomCursor