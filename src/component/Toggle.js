import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Box } from "../styles/GlobalStyles";

const Toggle = () => {
  // checkbox 체크여부
  const [toggleBtn, setToggleBtn] = useState(false);
  //input checkbox
  const toggleCheck = useRef();

  return (
    <Box>
      <h1>Toggle</h1>
      <ToggleBox>
        {/* Toggle */}
        <ToggleBtn onClick={() => setToggleBtn(toggleCheck.current.checked)}>
          <input id="toggle" type="checkbox" ref={toggleCheck} />
          <label htmlFor="toggle">
            <span />
          </label>
        </ToggleBtn>
        {/* 토글 on/off 표시 */}
        <p>Toggle Switch {toggleBtn ? "ON" : "OFF"}</p>
      </ToggleBox>
    </Box>
  );
};

// 중앙배치
const ToggleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  p {
    margin-top: 10px;
  }
`;

// 토글 버튼 스타일
// label 회색바탕
// label::befor 흰색동그라미
// span 체크시 나오는 파란색
const ToggleBtn = styled.div`
  width: 100px;
  input {
    display: none;
    transition: all 0.4s;
    :checked + label span {
      transform: translateX(0);
    }
    :checked + label:before {
      transform: translateX(58px);
    }
  }
  label {
    display: inline-block;
    position: relative;
    width: 100%;
    height: 40px;
    border-radius: 28px;
    background-color: #ccc;
    overflow: hidden;
    cursor: pointer;
    ::before {
      display: block;
      position: absolute;
      left: 6px;
      bottom: 6px;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background-color: #fff;
      transition: all 0.4s;
      z-index: 1;
      content: "";
    }
    span {
      display: block;
      position: absolute;
      left: 0;
      width: 100px;
      height: 40px;
      transform: translateX(-100%);
      background-color: #3d51ff;
      transition: all 0.4s;
      content: "";
    }
  }
`;

export default Toggle;
