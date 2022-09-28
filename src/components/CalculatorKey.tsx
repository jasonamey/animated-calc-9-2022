import { useState } from 'react'
import styled from 'styled-components'
import { device } from '../styles/devices'
import { calculatorKeyType } from '../types'

interface IKeyProps {
  item: calculatorKeyType
  isDisabled: boolean
  keyFunction: (key: calculatorKeyType) => void
}

const Key = ({ item, isDisabled, keyFunction }: IKeyProps) => {
  const [isMoving, setIsMoving] = useState(false)

  const clickHandler = () => {
    keyFunction(item)
    setIsMoving(true)
    setTimeout(() => {
      setIsMoving(false)
    }, 200)
  }
  switch (item) {
    case 'RESET':
      return (
        <ResetKey isMoving={isMoving}>
          <button className="word-class" onClick={clickHandler}>
            {item}
          </button>
        </ResetKey>
      )
    case 'DEL':
      return (
        <DelKey isMoving={isMoving}>
          <button
            className="word-class"
            onClick={clickHandler}
            disabled={isDisabled}
          >
            {item}
          </button>
        </DelKey>
      )
    case '=':
      return (
        <EqualsKey isMoving={isMoving}>
          <button onClick={clickHandler}>{item}</button>
        </EqualsKey>
      )
    default:
      return (
        <SquareKey isMoving={isMoving}>
          <button onClick={clickHandler} disabled={isDisabled}>
            {item}
          </button>
        </SquareKey>
      )
  }
}

const KeyWrapper = styled.div<{ isMoving: boolean }>`
  border-radius: 8px;
  overflow: hidden;
  transition: 0.1s;
  .word-class {
    font-size: 18px;
    letter-spacing: 1px;
  }
  button {
    border: none;
    width: 100%;
    height: 100%;
    font-family: inherit;
    padding: 16px 2px 12px 2px;
    font-size: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    line-height: 1;
  }
  transform: ${(props) => (props.isMoving ? 'translateY(5px)' : 'none')};
  @media screen and ${device.tablet} {
    button {
      padding: 12px 10px 8px 10px;
    }
  }
`

const SquareKey = styled(KeyWrapper)`
  box-shadow: 0 4px 0 0 ${({ theme }) => theme.squareKeyShadow};
  box-shadow: ${(props) => props.isMoving && 'none'};
  button {
    color: ${({ theme }) => theme.squareKeyColor};
    background-color: ${({ theme }) => theme.squareKeyBackgroundColor};
  }
`

const DelKey = styled(KeyWrapper)`
  box-shadow: 0 4px 0 0 ${({ theme }) => theme.deleteKeyShadow};
  box-shadow: ${(props) => props.isMoving && 'none'};
  button {
    color: ${({ theme }) => theme.deleteKeyColor};
    background-color: ${({ theme }) => theme.deleteKeyBackgroundColor};
  }
`

const ResetKey = styled(KeyWrapper)`
  grid-column: span 2;
  box-shadow: 0 4px 0 0 ${({ theme }) => theme.resetKeyShadow};
  box-shadow: ${(props) => props.isMoving && 'none'};
  button {
    color: ${({ theme }) => theme.resetKeyColor};
    background-color: ${({ theme }) => theme.resetKeyBackgroundColor};
  }
`

const EqualsKey = styled(KeyWrapper)`
  grid-column: span 2;
  box-shadow: 0 4px 0 0 ${({ theme }) => theme.equalsKeyShadow};
  box-shadow: ${(props) => props.isMoving && 'none'};
  button {
    color: ${({ theme }) => theme.equalsKeyColor};
    background-color: ${({ theme }) => theme.equalsKeyBackgroundColor};
  }
`

export default Key
