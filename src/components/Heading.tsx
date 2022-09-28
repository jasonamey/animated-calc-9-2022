import React from 'react'
import Toggle from './Toggle'
import styled from 'styled-components'

const Heading = () => {
  return (
    <HeadingWrapper>
      <h1>calc</h1>
      <Toggle />
    </HeadingWrapper>
  )
}

const HeadingWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 28px;
  h1 {
    font-size: 26px;
    font-weight: 500;
    letter-spacing: 1px;
    color: ${(props) => props.theme.headerColor};
  }
`

export default Heading
