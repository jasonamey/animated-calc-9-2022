import Pad from '../Pad'
import { render, screen } from '@testing-library/react'
import { calculatorKeyType } from '../../types'

describe('Pad', () => {
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
  `('Pad renders $key key', (props: { key: calculatorKeyType }) => {
    const { key } = props
    const mockFn = jest.fn()
    render(<Pad keyHandler={mockFn} isOperandDisabled={false} />)
    expect(screen.getByRole('button', { name: key })).toBeInTheDocument()
  })
})
