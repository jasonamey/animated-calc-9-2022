import Heading from '../Heading'
import { render, screen } from '@testing-library/react'
describe('Heading', () => {
  describe('Heading renders', () => {
    it('Renders heading', () => {
      render(<Heading />)
      expect(screen.getByRole('heading', { name: 'calc' })).toBeInTheDocument()
    })
    it('Renders Toggle component', () => {
      render(<Heading />)
      expect(screen.getByRole('heading', { name: 'THEME' })).toBeInTheDocument()
      expect(screen.getByLabelText('1')).toBeInTheDocument()
      expect(screen.getByLabelText('2')).toBeInTheDocument()
      expect(screen.getByLabelText('3')).toBeInTheDocument()
      const radioButtons = screen.getAllByRole('radio')
      expect(radioButtons.length).toBe(3)
    })
  })
})
