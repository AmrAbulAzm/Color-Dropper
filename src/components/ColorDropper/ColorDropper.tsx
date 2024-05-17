import React, { useState } from 'react'
import CanvasWithImage from '../CanvasWithImage'
import CustomCursor from '../CustomCursor'
import ToolBar from '../ToolBar'

const style: (isDropperActiveAndOnCanvas: boolean) => React.CSSProperties = (isDropperActiveAndOnCanvas: boolean) => ({
  cursor: isDropperActiveAndOnCanvas ? 'none' : 'default'
})

const ColorDropper: React.FC = () => {
  const [isDropperActive, setIsDropperActive] = useState<boolean>(false)
  const [isDropperOnCanvas, setIsDropperOnCanvas] = useState<boolean>(false)
  const [hoveredColor, setHoveredColor] = useState<string>('')
  const [selectedColor, setSelectedColor] = useState<string>('')

  const toggleDropper = () => {
    setIsDropperActive(prevState => !prevState)
  }

  const toggleDropperOnCanvas = () => {
    setIsDropperOnCanvas(prevState => !prevState)
  }

  const onCanvasClick = () => {
    setSelectedColor(hoveredColor)
    toggleDropper()
  }

  return (
    <>
      <div style={style(isDropperActive && isDropperOnCanvas)} data-testid='color-dropper' >
        <ToolBar
          active={isDropperActive}
          selectedColor={selectedColor}
          onToggle={toggleDropper}
        />
        <CanvasWithImage
          toggleDropperOnCanvas={toggleDropperOnCanvas}
          onCanvasClick={onCanvasClick}
          setHoveredColor={setHoveredColor}
        />
      </div>
      {isDropperActive && isDropperOnCanvas && <CustomCursor hoveredColor={hoveredColor} />}
    </>
  )
}

export default ColorDropper
