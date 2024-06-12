import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import DropperButton from './DropperButton'

describe('DropperButton', () => {
  test('renders the SVG path with the correct fill color when active is false', () => {
    render(<DropperButton active={false} onClickHandler={jest.fn()} />)
    const svg = screen.getByRole('button').querySelector('svg')
    expect(svg).toHaveStyle('fill: black')
  })

  test('renders the SVG path with the correct fill color when active is true', () => {
    render(<DropperButton active={true} onClickHandler={jest.fn()} />)
    const svg = screen.getByRole('button').querySelector('svg')
    expect(svg).toHaveStyle('fill: blue')
  })

  test('calls the onClickHandler when the button is clicked', () => {
    const onClickHandler = jest.fn()
    render(<DropperButton active={false} onClickHandler={onClickHandler} />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(onClickHandler).toHaveBeenCalledTimes(1)
  })
})
