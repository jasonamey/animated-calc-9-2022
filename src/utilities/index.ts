import { bignumber, add, subtract, divide, multiply, MathType } from 'mathjs'
import { operatorType } from '../types'

const mathJsFunctions: Record<
  string,
  (num1: MathType, num2: MathType) => MathType
> = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
}

//function to modify sci notation for mathJs calculations, no '+' or '-' permitted
export function removePlusOrMinus(num: string) {
  if (num.indexOf('-') !== -1) {
    return num.replace('-', '')
  } else if (num.indexOf('+') !== -1) {
    return num.replace('+', '')
  }
  return num
}

export function mathJsFunctionHandler(
  operandOne: string,
  operandTwo: string,
  operator: operatorType
) {
  return mathJsFunctions[operator](
    bignumber(removePlusOrMinus(operandOne)),
    bignumber(removePlusOrMinus(operandTwo))
  )
}
