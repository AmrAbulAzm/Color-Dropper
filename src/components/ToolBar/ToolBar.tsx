import React from 'react'
import DropperButton from './DropperButton'

type Styles = {
  container: React.CSSProperties
  title: React.CSSProperties
  colorPreview: (selectedColor: string) => React.CSSProperties
}

const styles: Styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    position: 'fixed',
    borderBottomRightRadius: 5,
    width: 240,
    height: 60,
  },
  title: {
    fontFamily: 'Verdana',
    marginRight: 20,
  },
  colorPreview: (selectedColor: string) => ({
    width: 40,
    height: 40,
    borderRadius: '50%',
    backgroundColor: selectedColor,
    border: selectedColor ? '1px solid black' : 'none'
  }),
}

interface ToolBarProps {
  active: boolean
  selectedColor: string
  onToggle: () => void
}

const ToolBar: React.FC<ToolBarProps> = ({ active, selectedColor, onToggle }) => (
  <div style={styles.container} data-testid='toolbar'>
    <DropperButton onClickHandler={onToggle} active={active} />
    <h4 style={styles.title}>{selectedColor}</h4>
    <div style={styles.colorPreview(selectedColor)} />
  </div>
)

export default ToolBar
