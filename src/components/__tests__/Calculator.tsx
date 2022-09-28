import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Calculator from '../Calculator'
import { operatorType } from '../../types'

async function inputItemIntoCalculator(item: string) {
  for (const char of item) {
    const key = screen.getByRole('button', { name: char })
    await userEvent.click(key)
  }
}
async function performCalculation(
  operandOne: string,
  operator: operatorType,
  operandTwo: string
) {
  await inputItemIntoCalculator(operandOne)
  await inputItemIntoCalculator(operator)
  await inputItemIntoCalculator(operandTwo)
  await userEvent.click(screen.getByRole('button', { name: '=' }))
}

describe('Calculator', () => {
  beforeEach(() => {
    render(<Calculator />)
  })
  afterEach(async () => {
    const resetButton = await screen.findByRole('button', { name: 'RESET' })
    await userEvent.click(resetButton)
  })
  it('Displays proper item typed on keys', async () => {
    await inputItemIntoCalculator('12345')
    const displayInput = await screen.findByRole('heading', { name: '12345' })
    expect(displayInput).toBeInTheDocument()
  })
  it.each`
    operandOne | operandTwo       | result
    ${'1'}     | ${'1'}           | ${'2'}
    ${'101'}   | ${'101'}         | ${'202'}
    ${'1'}     | ${'99999999998'} | ${'99999999999'}
  `(
    '$operandOne + $operandTwo = $result',
    async (props: {
      operandOne: string
      operandTwo: string
      result: string
    }) => {
      const { operandOne, operandTwo, result } = props
      await performCalculation(operandOne, '+', operandTwo)
      const displayInput = await screen.findByRole('heading', { name: result })
      expect(displayInput).toBeInTheDocument()
      const resetButton = await screen.findByRole('button', { name: 'RESET' })
      await userEvent.click(resetButton)
    }
  )
  it.each`
    operandOne | operandTwo | result
    ${'1'}     | ${'1'}     | ${'0'}
    ${'101'}   | ${'1'}     | ${'100'}
    ${'10'}    | ${'5'}     | ${'5'}
  `(
    '$operandOne - $operandTwo = $result',
    async (props: {
      operandOne: string
      operandTwo: string
      result: string
    }) => {
      const { operandOne, operandTwo, result } = props
      await performCalculation(operandOne, '-', operandTwo)
      const displayInput = await screen.findByRole('heading', { name: result })
      expect(displayInput).toBeInTheDocument()
      const resetButton = await screen.findByRole('button', { name: 'RESET' })
      await userEvent.click(resetButton)
    }
  )
})
