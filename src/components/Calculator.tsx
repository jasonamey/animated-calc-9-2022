import { useState } from 'react'
import { mathJsFunctionHandler } from '../utilities'
import {
  operatorType,
  operandsType,
  operandDigitType,
  calculatorKeyType,
} from '../types'
import Heading from './Heading'
import Display from './Display'
import Pad from './Pad'
import styled from 'styled-components'
import { device } from '../styles/devices'

const Calculator = () => {
  const [operands, setOperands] = useState<operandsType>({
    firstOperand: '0',
    secondOperand: '0',
  })
  const [operator, setOperator] = useState<operatorType>('')
  const [isFlashing, setIsFlashing] = useState(false)
  const [isEnlarged, setIsEnlarged] = useState(false)

  const calculateExpression = () => {
    const result = mathJsFunctionHandler(
      operands.firstOperand,
      operands.secondOperand,
      operator
    ).toString()
    //handle NaN
    if (result === 'NaN') {
      setOperands({
        firstOperand: '0',
        secondOperand: '0',
      })

      //handle 1/0 = Infinity
    } else if (result === 'Infinity') {
      setOperands({
        firstOperand: 'Infinity',
        secondOperand: '0',
      })
      setTimeout(() => {
        setOperands({
          firstOperand: '0',
          secondOperand: '0',
        })
      }, 2000)
    } else {
      setOperands({
        firstOperand: result,
        secondOperand: '0',
      })
    }
    //animate display that calculation was made, and reset operator
    setIsEnlarged(true)
    setTimeout(() => {
      setIsEnlarged(false)
    }, 300)
    setOperator('')
  }

  const handleOperator = (item: operatorType) => {
    const operator = item === 'x' ? '*' : item
    setOperator(operator)
    setIsFlashing(true)
    setTimeout(() => {
      setIsFlashing(false)
    }, 100)
  }

  const reset = () => {
    setOperands({ firstOperand: '0', secondOperand: '0' })
    setOperator('')
  }

  const del = () => {
    const operandToDelete =
      operator.length > 0 ? 'secondOperand' : 'firstOperand'
    const updatedOperand =
      operands[operandToDelete].length === 1
        ? '0'
        : operands[operandToDelete].slice(0, -1)
    setOperands((prev) => {
      const newObj = { ...prev }
      newObj[operandToDelete] = updatedOperand
      return newObj
    })
  }

  const addToOperand = (char: operandDigitType) => {
    const operandToAddTo =
      operator.length > 0 ? 'secondOperand' : 'firstOperand'
    if (char === '.') {
      const operand = operands[operandToAddTo]
      if (operand.indexOf('.') === -1 && operand.length < 11) {
        setOperands((prev) => {
          const newObj = { ...prev }
          const tempValue = newObj[operandToAddTo]
          newObj[operandToAddTo] = tempValue + char
          return newObj
        })
      }
    } else if (operands[operandToAddTo] === '0') {
      setOperands((prev) => {
        const newObj = { ...prev }
        newObj[operandToAddTo] = char
        return newObj
      })
    } else {
      setOperands((prev) => {
        const newObj = { ...prev }
        const tempValue = newObj[operandToAddTo]
        newObj[operandToAddTo] = tempValue + char
        return newObj
      })
    }
  }

  const keyHandler = (key: calculatorKeyType) => {
    function isFunctionKey(key: calculatorKeyType) {
      const functionKeys = new Set(['DEL', 'RESET', '='])
      return functionKeys.has(key)
    }
    if (isFunctionKey(key)) {
      switch (key) {
        case '=':
          return calculateExpression()
        case 'RESET':
          return reset()
        case 'DEL':
          return del()
      }
    } else if ('.0123456789'.indexOf(key) !== -1) {
      addToOperand(key as operandDigitType)
    } else {
      handleOperator(key as operatorType)
    }
  }
  function disableOperands(operands: operandsType, operator: operatorType) {
    const operandNum = operator.length > 0 ? 'secondOperand' : 'firstOperand'
    return operands[operandNum].length > 11
  }
  return (
    <CalculatorWrapper>
      <Heading />
      <Display
        operands={operands}
        operator={operator}
        flash={isFlashing}
        isEnlarged={isEnlarged}
      />
      <Pad
        keyHandler={keyHandler}
        isOperandDisabled={disableOperands(operands, operator)}
      />
    </CalculatorWrapper>
  )
}

const CalculatorWrapper = styled.div`
  width: 328px;
  @media screen and ${device.tablet} {
    width: 428px;
  }
`

export default Calculator
