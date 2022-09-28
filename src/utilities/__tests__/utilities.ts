import { removePlusOrMinus, mathJsFunctionHandler } from '..'

describe('removePlusOrMinus', () => {
  it('Removes "-" sign from string', () => {
    const result = removePlusOrMinus('4.2e-10')
    expect(result).toBe('4.2e10')
  })
  it('Removes "+" from string', () => {
    const result = removePlusOrMinus('4.2e+10')
    expect(result).toBe('4.2e10')
  })
})

describe('mathJsFunctionHandler', () => {
  describe('Test addition', () => {
    it.each`
      operandOne                  | operandTwo                  | result
      ${'1'}                      | ${'1'}                      | ${'2'}
      ${'101'}                    | ${'1'}                      | ${'102'}
      ${'10'}                     | ${'5'}                      | ${'15'}
      ${'.1'}                     | ${'.2'}                     | ${'0.3'}
      ${'0.1'}                    | ${'0.2'}                    | ${'0.3'}
      ${'.3'}                     | ${'.3'}                     | ${'0.6'}
      ${'1.1'}                    | ${'1.1'}                    | ${'2.2'}
      ${'111111111111111111111'}  | ${'111111111111111111111'}  | ${'222222222222222222222'}
      ${'1111111111111111111111'} | ${'1111111111111111111111'} | ${'2.222222222222222222222e+21'}
    `(
      '$operandOne + $operandTwo = $result',
      (props: { operandOne: string; operandTwo: string; result: number }) => {
        const { operandOne, operandTwo, result } = props
        expect(
          mathJsFunctionHandler(operandOne, operandTwo, '+').toString()
        ).toBe(result)
      }
    )
  })
  describe('Test subtraction', () => {
    it.each`
      operandOne | operandTwo                  | result
      ${'1'}     | ${'1'}                      | ${'0'}
      ${'101'}   | ${'1'}                      | ${'100'}
      ${'10'}    | ${'5'}                      | ${'5'}
      ${'1'}     | ${'2'}                      | ${'-1'}
      ${'.1'}    | ${'.2'}                     | ${'-0.1'}
      ${'0.1'}   | ${'0.2'}                    | ${'-0.1'}
      ${'.3'}    | ${'.3'}                     | ${'0'}
      ${'1.1'}   | ${'1.1'}                    | ${'0'}
      ${'1'}     | ${'111111111111111111111'}  | ${'-111111111111111111110'}
      ${'1'}     | ${'1111111111111111111111'} | ${'-1.11111111111111111111e+21'}
    `(
      '$operandOne - $operandTwo = $result',
      (props: { operandOne: string; operandTwo: string; result: number }) => {
        const { operandOne, operandTwo, result } = props
        expect(
          mathJsFunctionHandler(operandOne, operandTwo, '-').toString()
        ).toBe(result)
      }
    )
  })
  describe('Test multiplication', () => {
    it.each`
      operandOne       | operandTwo                  | result
      ${'0'}           | ${'0'}                      | ${'0'}
      ${'1'}           | ${'1'}                      | ${'1'}
      ${'10'}          | ${'10'}                     | ${'100'}
      ${'10'}          | ${'5'}                      | ${'50'}
      ${'9'}           | ${'9'}                      | ${'81'}
      ${'.1'}          | ${'.2'}                     | ${'0.02'}
      ${'0.1'}         | ${'0.2'}                    | ${'0.02'}
      ${'.3'}          | ${'.3'}                     | ${'0.09'}
      ${'1.1'}         | ${'1.1'}                    | ${'1.21'}
      ${'.001'}        | ${'0.001'}                  | ${'0.000001'}
      ${'1'}           | ${'111111111111111111111'}  | ${'111111111111111111111'}
      ${'1'}           | ${'1111111111111111111111'} | ${'1.111111111111111111111e+21'}
      ${'99999999999'} | ${'99999999999'}            | ${'9.999999999800000000001e+21'}
      ${'.0000000001'} | ${'.0000000001'}            | ${'1e-20'}
      ${'1e-10'}       | ${'1e-10'}                  | ${'100000000000000000000'}
      ${'1e-11'}       | ${'1e-10'}                  | ${'1e+21'}
      ${'1e-12'}       | ${'1e-10'}                  | ${'1e+22'}
      ${'1e-13'}       | ${'1e-10'}                  | ${'1e+23'}
      ${'1e-14'}       | ${'1e-10'}                  | ${'1e+24'}
      ${'1e-15'}       | ${'1e-10'}                  | ${'1e+25'}
      ${'1e-16'}       | ${'1e-10'}                  | ${'1e+26'}
      ${'10000000000'} | ${'10'}                     | ${'100000000000'}
      ${'10000000000'} | ${'100'}                    | ${'1000000000000'}
      ${'10000000000'} | ${'1000'}                   | ${'10000000000000'}
      ${'10000000000'} | ${'10000'}                  | ${'100000000000000'}
      ${'10000000000'} | ${'100000'}                 | ${'1000000000000000'}
      ${'10000000000'} | ${'1000000'}                | ${'10000000000000000'}
      ${'10000000000'} | ${'10000000'}               | ${'100000000000000000'}
      ${'10000000000'} | ${'100000000'}              | ${'1000000000000000000'}
      ${'10000000000'} | ${'1000000000'}             | ${'10000000000000000000'}
      ${'10000000000'} | ${'10000000000'}            | ${'100000000000000000000'}
      ${'10000000000'} | ${'100000000000'}           | ${'1e+21'}
    `(
      '$operandOne * $operandTwo = $result',
      (props: { operandOne: string; operandTwo: string; result: number }) => {
        const { operandOne, operandTwo, result } = props
        expect(
          mathJsFunctionHandler(operandOne, operandTwo, '*').toString()
        ).toBe(result)
      }
    )
  })
  describe('Test Infinity', () => {
    it('1 / 0 = Infinity', () => {
      expect(mathJsFunctionHandler('1', '0', '/').toString()).toBe('Infinity')
    })
    it('-1 / 0 = Infinity', () => {
      expect(mathJsFunctionHandler('-1', '0', '/').toString()).toBe('Infinity')
    })
  })
  describe('Test NaN', () => {
    it('0 / 0 = NaN', () => {
      expect(mathJsFunctionHandler('0', '0', '/').toString()).toBe('NaN')
    })
  })
})
