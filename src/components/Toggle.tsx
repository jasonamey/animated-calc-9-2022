import React, { useState } from 'react'
import styled from 'styled-components'
import { useThemeContext } from '../context'

const Toggle = () => {
  const { idx, setTheme } = useThemeContext()
  const [checkedValue, setCheckedValue] = useState(() => idx)
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(Number(e.target.value))
    setCheckedValue(Number(e.target.value))
  }
  return (
    <ToggleBox>
      <ToggleLeft>
        <h4>THEME</h4>
      </ToggleLeft>
      <ToggleRight>
        <div className="label-box">
          <label htmlFor="checkbox-0">1</label>
          <label htmlFor="checkbox-1">2</label>
          <label htmlFor="checkbox-2">3</label>
        </div>
        <ToggleWrapper>
          <input
            type="radio"
            name="toggle"
            value="0"
            onChange={changeHandler}
            checked={0 === checkedValue}
            id="checkbox-0"
          />
          <input
            checked={1 === checkedValue}
            type="radio"
            name="toggle"
            value="1"
            onChange={changeHandler}
            id="checkbox-1"
          />

          <input
            checked={2 === checkedValue}
            type="radio"
            name="toggle"
            value="2"
            onChange={changeHandler}
            id="checkbox-2"
          />
          <span className="switch"></span>
        </ToggleWrapper>
      </ToggleRight>
    </ToggleBox>
  )
}

const ToggleBox = styled.section`
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ToggleLeft = styled.div`
  h4 {
    font-size: 11px;
    letter-spacing: 1.6px;
    color: ${(props) => props.theme.headerColor};
  }
`
const ToggleRight = styled.div`
  width: 56px;
  display: flex;
  flex-direction: column;
  .label-box {
    width: 100%;
    display: flex;
    font-size: 11px;
    margin-bottom: 4px;
    label {
      text-align: center;
      width: 100%;
      color: ${(props) => props.theme.headerColor};
    }
  }
`

const ToggleWrapper = styled.div`
  width : 100%;
  display: inline-block;
  border-radius: 20px;
  position: relative;
  background-color: ${(props) => props.theme.padBackgroundColor};
  display: flex;
  padding : 0 4px;
  justify-content : space-between;
  align-items: center;
  height: 19px;
  input {
    opacity: 0;
    cursor: pointer;
    height: 100%
    width: 100%;
    margin : 0;
  }
  span {
    --size: 12px;
    z-index: 0;
    height: var(--size);
    width: var(--size);
    border-radius: 50%;
    background: ${(props) => props.theme.equalsKeyBackgroundColor};
    position: absolute;
  }
  input[value="0"]:checked ~ span {
    background: ${(props) => props.theme.equalsKeyBackgroundColor};
    left: 4px; 
  }
  input[value="1"]:checked ~ span {
    background: ${(props) => props.theme.equalsKeyBackgroundColor};
    left: 50%;
    transform: translateX(-50%);
  }
  input[value="2"]:checked ~ span {
    background: ${(props) => props.theme.equalsKeyBackgroundColor};
    right: 4px;
  }
`

export default Toggle
