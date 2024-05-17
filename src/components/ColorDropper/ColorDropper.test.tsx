import { render, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import 'jest-canvas-mock'
import ColorDropper from './ColorDropper'

describe('ColorDropper', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(<ColorDropper />)
    expect(getByTestId('color-dropper')).toBeInTheDocument()
  })

  test('integration test happy path', async () => {
    const { getByRole, getByTestId } = render(<ColorDropper />)
    const dropperButton = getByRole('button')
    const canvas = getByTestId('canvas-with-image')
    const colorPreview = getByTestId('toolbar').lastChild
    const path = dropperButton.querySelector('path')

    // Assert initial state with button inactive and no color selected
    expect(path).toHaveAttribute('fill', 'black')
    expect(colorPreview).toHaveStyle({ border: 'none' })

    // Simulate click event on dropper button
    fireEvent.click(dropperButton)

    // Assert button is active
    expect(path).toHaveAttribute('fill', 'blue')

    // Simulate mouse enter event on the canvas
    userEvent.hover(canvas)

    // Wait for a brief moment to allow the component to update
    await waitFor(() => {}, { timeout: 100 })

    // Simulate click event on the canvas
    userEvent.click(canvas)

    // Assert that the border style is updated after the click event implying selected color is updated
    await waitFor(() => {
      expect(colorPreview).toHaveStyle({ border: '1px solid black' });
    })
  })
})
