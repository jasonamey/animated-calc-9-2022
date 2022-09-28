import CalculatorKey from '../CalculatorKey'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { calculatorKeyType } from '../../types'

describe('Calculator Keys', () => {
  it.each`
    key
    ${'7'}
    ${'8'}
    ${'9'}
    ${'DEL'}
    ${'4'}
    ${'5'}
    ${'6'}
    ${'+'}
    ${'1'}
    ${'2'}
    ${'3'}
    ${'-'}
    ${'.'}
    ${'0'}
    ${'/'}
    ${'x'}
    ${'RESET'}
    ${'='}
  `('renders $key key', (props: { key: calculatorKeyType }) => {
    const { key } = props
    const mockFn = jest.fn()
    render(<CalculatorKey item={key} isDisabled={false} keyFunction={mockFn} />)
    expect(screen.getByRole('button', { name: key })).toBeInTheDocument()
  })
  it.each`
    key
    ${'7'}
    ${'8'}
    ${'9'}
    ${'DEL'}
    ${'4'}
    ${'5'}
    ${'6'}
    ${'+'}
    ${'1'}
    ${'2'}
    ${'3'}
    ${'-'}
    ${'.'}
    ${'0'}
    ${'/'}
    ${'x'}
  `(
    'disables $key key when not enabled',
    (props: { key: calculatorKeyType }) => {
      const { key } = props
      const mockFn = jest.fn()
      render(
        <CalculatorKey item={key} isDisabled={true} keyFunction={mockFn} />
      )
      expect(screen.getByRole('button', { name: key })).not.toBeEnabled()
    }
  )
  it.each`
    key
    ${'RESET'}
    ${'='}
  `('key $key is always enabled', (props: { key: calculatorKeyType }) => {
    const { key } = props
    const mockFn = jest.fn()
    render(<CalculatorKey item={key} isDisabled={true} keyFunction={mockFn} />)
    expect(screen.getByRole('button', { name: key })).toBeEnabled()
  })
  it.each`
    key
    ${'7'}
    ${'8'}
    ${'9'}
    ${'DEL'}
    ${'4'}
    ${'5'}
    ${'6'}
    ${'+'}
    ${'1'}
    ${'2'}
    ${'3'}
    ${'-'}
    ${'.'}
    ${'0'}
    ${'/'}
    ${'x'}
    ${'RESET'}
    ${'='}
  `(
    '$key key can be clicked when enabled',
    async (props: { key: calculatorKeyType }) => {
      const { key } = props
      const mockFn = jest.fn()
      render(
        <CalculatorKey item={key} isDisabled={false} keyFunction={mockFn} />
      )
      const button = screen.getByRole('button', { name: key })
      await userEvent.click(button)
      expect(mockFn.mock.calls.length).toBe(1)
    }
  )
})
