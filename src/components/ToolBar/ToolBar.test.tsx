import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ToolBar from './ToolBar'

describe('ToolBar component', () => {
  let active: boolean
  let selectedColor: string
  let mockToggle: jest.Mock

  beforeEach(() => {
    active = true;
    selectedColor = '#ff0000';
    mockToggle = jest.fn();
  })


  test('renders correctly and displays selected color', () => {
    const { getByTestId, getByRole } = render(
      <ToolBar active={active} selectedColor={selectedColor} onToggle={mockToggle} />
    );

    expect(getByTestId('toolbar')).toBeInTheDocument();

    const colorPreviewHeading = getByRole('heading');
    expect(colorPreviewHeading).toBeInTheDocument();
    expect(colorPreviewHeading).toHaveTextContent(selectedColor);
  });

  test('calls onToggle when DropperButton is clicked', () => {
    const { getByRole } = render(
      <ToolBar active={active} selectedColor={selectedColor} onToggle={mockToggle} />
    )

    const dropperButton = getByRole('button')
    fireEvent.click(dropperButton)

    expect(mockToggle).toHaveBeenCalledTimes(1)
  })
})
