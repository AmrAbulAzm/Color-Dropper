import { render, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-canvas-mock'
import CanvasWithImage from './CanvasWithImage'

describe('CanvasWithImage component', () => {
  let toggleDropperOnCanvas: jest.Mock
  let setHoveredColor: jest.Mock
  let onCanvasClick: jest.Mock

  beforeEach(() => {
    toggleDropperOnCanvas = jest.fn()
    setHoveredColor = jest.fn()
    onCanvasClick = jest.fn()
  })

  test('renders correctly and has dimensions of 4000x4000 pixels', () => {
    const { getByTestId } = render(
      <CanvasWithImage
        toggleDropperOnCanvas={toggleDropperOnCanvas}
        setHoveredColor={setHoveredColor}
        onCanvasClick={onCanvasClick}
      />
    )

    const canvas = getByTestId('canvas-with-image')
    expect(canvas).toBeInTheDocument()
    expect(canvas).toHaveAttribute('width', '4000');
    expect(canvas).toHaveAttribute('height', '4000');
  })

  test('handles mouse move correctly', () => {
    const { getByTestId } = render(
      <CanvasWithImage
        toggleDropperOnCanvas={toggleDropperOnCanvas}
        setHoveredColor={setHoveredColor}
        onCanvasClick={onCanvasClick}
      />
    )

    const canvas = getByTestId('canvas-with-image')

    act(() => {
      fireEvent.mouseMove(canvas)
    })

    expect(setHoveredColor).toHaveBeenCalled()
  })

  test('handles canvas click correctly', () => {
    const { getByTestId } = render(
      <CanvasWithImage
        toggleDropperOnCanvas={toggleDropperOnCanvas}
        setHoveredColor={setHoveredColor}
        onCanvasClick={onCanvasClick}
      />
    )

    const canvas = getByTestId('canvas-with-image')
    fireEvent.click(canvas)

    expect(onCanvasClick).toHaveBeenCalled()
  })
})
