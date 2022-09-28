import Display from '../Display'
import { render, screen } from '@testing-library/react'
import { IDisplayProps } from '../Display'

const defaultProps: IDisplayProps = {
  flash: false,
  isEnlarged: false,
  operator: '',
  operands: { firstOperand: '1', secondOperand: '0' },
}

describe('Display', () => {
  test('Renders first operand', () => {
    render(<Display {...defaultProps} />)
    expect(screen.getByRole('heading', { name: '1' })).toBeInTheDocument()
  })
  test('Renders second operand when operator is present', () => {
    render(
      <Display
        {...defaultProps}
        operator={'+'}
        operands={{ firstOperand: '1', secondOperand: '100' }}
      />
    )
    expect(screen.getByRole('heading', { name: '100' })).toBeInTheDocument()
  })
  test('Properly displays scientific notation for large numbers', () => {
    for (let i = 11; i < 20; i++) {
      const num = Math.pow(10, i).toString()
      render(
        <Display
          {...defaultProps}
          operands={{ firstOperand: num, secondOperand: '0' }}
        />
      )
      const result = `1e+${i}`
      expect(screen.getByRole('heading', { name: result })).toBeInTheDocument()
    }
  })
  test('Properly displays scientific notation for small numbers', () => {
    for (let i = 10; i < 17; i++) {
      const num = Math.pow(10, -i).toString()
      render(
        <Display
          {...defaultProps}
          operands={{ firstOperand: num, secondOperand: '0' }}
        />
      )
      const result = `1e-${i}`
      expect(screen.getByRole('heading', { name: result })).toBeInTheDocument()
    }
  })
})
