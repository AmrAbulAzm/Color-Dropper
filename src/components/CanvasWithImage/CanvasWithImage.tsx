import React, { useEffect, useRef } from 'react'
import { rgbToHex } from '../../utils/RgbToHex'

interface CanvasWithImageProps {
  toggleDropperOnCanvas: () => void
  setHoveredColor: (color: string) => void
  onCanvasClick: () => void
}

const CanvasWithImage: React.FC<CanvasWithImageProps> = ({
  toggleDropperOnCanvas,
  setHoveredColor,
  onCanvasClick
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctxRef.current = ctx // cached to avoid repeated creation

    const img = imgRef.current || new Image()
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    }
    img.src = 'src/components/CanvasWithImage/beach.jpg'
    imgRef.current = img // cached to avoid re-creation on subsequent renders

    return () => {
      // cleanup to avoid memory leaks
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }, [])

  const onMouseMoveHandler = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = ctxRef.current
    if (!ctx) return

    // selected these nativeEvent properties to avoid costy calculations
    const x = event.nativeEvent.offsetX
    const y = event.nativeEvent.offsetY

    const pixelData = ctx.getImageData(x, y, 1, 1).data
    const color = rgbToHex({ r: pixelData[0], g: pixelData[1], b: pixelData[2] })

    setHoveredColor(color)
  }

  return (
    <canvas
      data-testid='canvas-with-image'
      onMouseEnter={toggleDropperOnCanvas}
      onMouseLeave={toggleDropperOnCanvas}
      onMouseMove={onMouseMoveHandler}
      onClick={onCanvasClick}
      ref={canvasRef}
      width="4000"
      height="4000"
    />
  )
}

export default CanvasWithImage
