import { rgbToHex } from './RgbToHex'

describe('rgbToHex', () => {
  test('converts RGB to hex correctly', () => {
    const hexColor = rgbToHex({ r: 255, g: 0, b: 0 })
    expect(hexColor).toBe('#ff0000')
  })

  test('handles zero RGB values correctly', () => {
    const hexColor = rgbToHex({ r: 0, g: 0, b: 0 })
    expect(hexColor).toBe('#000000')
  })
})
