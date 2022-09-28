import { render, screen } from '@testing-library/react'
import { TestWrapper } from '../../test'
import userEvent from '@testing-library/user-event'

import Toggle from '../Toggle'

describe('Toggle', () => {
  it('clicks on Toggle radio buttons', async () => {
    render(<Toggle />, { wrapper: TestWrapper })
    const testRadioButtons = async (
      b1: HTMLElement,
      b2: HTMLElement,
      b3: HTMLElement
    ) => {
      await userEvent.click(b1)
      expect(b1).toBeChecked()
      expect(b2).not.toBeChecked()
      expect(b3).not.toBeChecked()
    }
    const [btn1, btn2, btn3] = screen.getAllByRole('radio')
    expect(btn1).not.toBeChecked()
    expect(btn2).toBeChecked()
    expect(btn3).not.toBeChecked()
    await testRadioButtons(btn2, btn1, btn3)
    await testRadioButtons(btn3, btn1, btn2)
    await testRadioButtons(btn1, btn2, btn3)
  })
})
