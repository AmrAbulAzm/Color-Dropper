import { act, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import CustomCursor from './CustomCursor'

describe('CustomCursor', () => {
  test('renders correctly with initial position and hoveredColor', () => {
    const { getByText, container } = render(<CustomCursor hoveredColor="#ff0000" />)
    
    expect(getByText('#ff0000')).toBeInTheDocument()

    const svgPath = container.querySelector('path')
    expect(svgPath).toHaveAttribute('fill', '#ff0000')
  })

  test('updates position on mouse move', () => {
    const { getByTestId } = render(<CustomCursor hoveredColor="#00ff00" />)
    const cursorDiv = getByTestId('custom-cursor')

    expect(cursorDiv).toHaveStyle({ left: '0px', top: '0px' })

    act(() => {
      document.dispatchEvent(new MouseEvent('mousemove', {
        clientX: 100,
        clientY: 150,
      }))
    })

    expect(cursorDiv).toHaveStyle({ left: '20px', top: '70px' })
  })
})
