export type themeType = {
  mainBackgroundColor: string
  padBackgroundColor: string
  displayBackgroundColor: string
  displayColor: string
  headerColor: string
  toggleBackgroundColor: string
  toggleSwitchColor: string
  squareKeyBackgroundColor: string
  squareKeyShadow: string
  squareKeyColor: string
  deleteKeyBackgroundColor: string
  deleteKeyShadow: string
  deleteKeyColor: string
  resetKeyBackgroundColor: string
  resetKeyShadow: string
  resetKeyColor: string
  equalsKeyBackgroundColor: string
  equalsKeyShadow: string
  equalsKeyColor: string
}

export type operatorType = '/' | 'x' | '+' | '-' | '' | '*'

export type operandDigitType =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '.'

export type operandsType = {
  firstOperand: string
  secondOperand: string
}

export type calculatorKeyType =
  | operatorType
  | operandDigitType
  | 'RESET'
  | 'DEL'
  | '='

// export type calculatorKeyType =
//   | '7'
//   | '8'
//   | '9'
//   | 'DEL'
//   | '4'
//   | '5'
//   | '6'
//   | '+'
//   | '1'
//   | '2'
//   | '3'
//   | '-'
//   | '.'
//   | '0'
//   | '/'
//   | 'x'
//   | 'RESET'
//   | '='
