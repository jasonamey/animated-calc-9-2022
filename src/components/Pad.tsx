import CalculatorKey from './CalculatorKey'
import { calculatorKeyType } from '../types'
import styled from 'styled-components'
import { device } from '../styles/devices'

interface IPadProps {
  keyHandler: (key: calculatorKeyType) => void
  isOperandDisabled: boolean
}

const Pad = ({ keyHandler, isOperandDisabled }: IPadProps) => {
  const calcKeys: {
    keyName: calculatorKeyType
    keyFunction: (key: calculatorKeyType) => void
    isDisabled: boolean
  }[] = [
    { keyName: '7', keyFunction: keyHandler, isDisabled: isOperandDisabled },
    { keyName: '8', keyFunction: keyHandler, isDisabled: isOperandDisabled },
    { keyName: '9', keyFunction: keyHandler, isDisabled: isOperandDisabled },
    { keyName: 'DEL', keyFunction: keyHandler, isDisabled: false },
    { keyName: '4', keyFunction: keyHandler, isDisabled: isOperandDisabled },
    { keyName: '5', keyFunction: keyHandler, isDisabled: isOperandDisabled },
    { keyName: '6', keyFunction: keyHandler, isDisabled: isOperandDisabled },
    { keyName: '+', keyFunction: keyHandler, isDisabled: false },
    { keyName: '1', keyFunction: keyHandler, isDisabled: isOperandDisabled },
    { keyName: '2', keyFunction: keyHandler, isDisabled: isOperandDisabled },
    { keyName: '3', keyFunction: keyHandler, isDisabled: isOperandDisabled },
    { keyName: '-', keyFunction: keyHandler, isDisabled: false },
    { keyName: '.', keyFunction: keyHandler, isDisabled: false },
    { keyName: '0', keyFunction: keyHandler, isDisabled: isOperandDisabled },
    { keyName: '/', keyFunction: keyHandler, isDisabled: false },
    { keyName: 'x', keyFunction: keyHandler, isDisabled: false },
    { keyName: 'RESET', keyFunction: keyHandler, isDisabled: false },
    { keyName: '=', keyFunction: keyHandler, isDisabled: false },
  ]

  return (
    <PadWrapper>
      {calcKeys.map((item, i) => {
        return (
          <CalculatorKey
            key={i}
            item={item.keyName}
            isDisabled={item.isDisabled}
            keyFunction={item.keyFunction}
          />
        )
      })}
    </PadWrapper>
  )
}

const PadWrapper = styled.section`
  display: grid;
  grid-gap: 16px;
  padding: 8px 8px 10px 8px;
  grid-template-columns: repeat(4, 1fr);
  border-radius: 8px;
  transition: all 0.5s linear;
  background-color: ${(props) => props.theme.padBackgroundColor};
  @media screen and ${device.mobileM} {
    padding: 22px;
  }
  @media screen and ${device.tablet} {
    grid-gap: 20px;
  }
`

export default Pad
