import React from 'react'
import styled from 'styled-components'
import { operatorType, operandsType } from '../types'
import { device } from '../styles/devices'

export interface IDisplayProps {
  operands: operandsType
  operator: operatorType
  flash: boolean
  isEnlarged: boolean
}

function Display({ operands, operator, flash, isEnlarged }: IDisplayProps) {
  //handles scientific notation and too-large results
  function handleDisplayResult(result: string) {
    //limits results larger than 11 characters
    function limitChars(result: string) {
      return result.length > 11 ? result.slice(0, 12) : result
    }
    //check for scientific notation
    const minusIdx = result.indexOf('-')
    const plusIdx = result.indexOf('+')
    if (minusIdx !== -1) {
      return `${result.substring(0, 1)}e${result.substring(minusIdx)}`
    } else if (plusIdx !== -1) {
      return `${result.substring(0, 1)}e${result.substring(plusIdx)}`
    }
    if (result.length > 11) {
      const splitResult = result.split('.')
      if (splitResult[0].length > 9) {
        return `${splitResult[0].substring(0, 1)}e+${result.length - 1}`
      }
    }
    return limitChars(result)
  }
  const { firstOperand, secondOperand } = operands
  return (
    <Wrapper flash={flash} isEnlarged={isEnlarged}>
      <h2>
        {operator === ''
          ? handleDisplayResult(firstOperand)
          : handleDisplayResult(secondOperand)}
      </h2>
    </Wrapper>
  )
}

export default Display

const Wrapper = styled.div<{ flash: boolean; isEnlarged: boolean }>`
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.displayBackgroundColor};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 26px;
  overflow: hidden;
  margin-bottom: 22px;
  animation-name: ${(props) =>
    props.flash ? 'flash' : props.isEnlarged ? 'enlarge' : 'none'};
  animation-duration: ${(props) => (props.flash ? '.1s' : '.3s')};
  animation-timing-function: linear;
  h2 {
    background-color: ${({ theme }) => theme.displayBackgroundColor};
    height: auto;
    text-align: right;
    font-size: 42px;
    color: ${({ theme }) => theme.displayColor};
    trasition: none;
  }
  @media screen and ${device.tablet} {
    &.smaller-txt {
      font-size: 42px;
    }
  }
  @keyframes flash {
    0%,
    50%,
    100% {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
  }
  @keyframes enlarge {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.025);
    }
    50% {
      transform: scale(1.05);
    }
    75% {
      transform: scale(1.025);
    }
    100% {
      transform: scale(1);
    }
  }
`
