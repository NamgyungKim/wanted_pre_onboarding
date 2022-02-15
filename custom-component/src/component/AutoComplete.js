import React, { useRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

let focusPosition = 0;
const AutoComplete = ({ autoComplete, setAutoComplete }) => {
  const [inputValue, setInputValue] = useState("");
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const inputRef = useRef();
  const ulRef = useRef();

  // input 입력
  // 자동완성 추가
  const addKeyword = (e) => {
    const copyKeyword = autoComplete.slice();
    // 엔터키에서만 실행
    if (e.key === "Enter") {
      // 엔터시 자동완성배열에 추가
      if (autoComplete.indexOf(inputValue) === -1) {
        copyKeyword.unshift(inputValue);
        setAutoComplete(copyKeyword);
      } else {
        // 최근입력값 배열 가장 앞으로
        copyKeyword.splice(copyKeyword.indexOf(inputValue), 1);
        setAutoComplete(copyKeyword);
        copyKeyword.unshift(inputValue);
      }
      // input reset
      setInputValue("");
      setShowAutoComplete(false);
    }
  };

  // input에서 위아래 버튼 클릭 시
  const focusKeyword = (e) => {
    if (inputValue !== "" && ulRef.current.children.length !== 0) {
      setShowAutoComplete(true);
      if (e.keyCode === 38) {
        focusPosition = ulRef.current.children.length - 1;
      }
      if (e.keyCode === 40) {
        focusPosition = 0;
      }
      if (e.keyCode === 38 || e.keyCode === 40) {
        ulRef.current.children[focusPosition].focus();
        e.preventDefault();
      }
    }
  };

  // 자동완성에 focus
  // 위,아래 방향키로 자동완성에 focus
  const focusAutoComplete = (e) => {
    setShowAutoComplete(true);
    e.preventDefault();

    // 키워드focus 상태에서 엔터 또는 click 시
    if (e.key === "Enter" || e.type === "click") {
      setInputValue(e.target.innerHTML);
    }

    // press up key
    if (e.keyCode === 38) {
      if (focusPosition === 0) {
        focusPosition = ulRef.current.children.length - 1;
        ulRef.current.children[0].focus();
      } else {
        focusPosition--;
      }
      ulRef.current.children[focusPosition].focus();
      inputRef.current.value = ulRef.current.children[focusPosition].innerHTML;
    }

    // press down key
    if (e.keyCode === 40) {
      if (focusPosition === ulRef.current.children.length - 1) {
        focusPosition = 0;
        ulRef.current.children[0].focus();
      } else {
        focusPosition++;
      }
      ulRef.current.children[focusPosition].focus();
      inputRef.current.value = ulRef.current.children[focusPosition].innerHTML;
    }
  };

  // inputValue
  const onChainge = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      setShowAutoComplete(false);
    } else {
      setShowAutoComplete(true);
    }
  };

  return (
    <AutoCompleteBox>
      <InputContainer
        tabIndex="0"
        onBlur={(e) => {
          if (e.relatedTarget && e.relatedTarget.className === "autoComplete") {
            setShowAutoComplete(true);
          } else {
            setShowAutoComplete(false);
          }
        }}
        onFocus={() => setShowAutoComplete(true)}
      >
        <div>
          <input
            onKeyPress={addKeyword}
            onKeyDown={focusKeyword}
            onChange={onChainge}
            ref={inputRef}
            type="text"
            value={inputValue}
          />
          <button
            onClick={() => {
              setInputValue("");
              setShowAutoComplete(false);
            }}
          />
        </div>
        {/* 자동완성 */}
        {showAutoComplete && inputValue !== "" ? (
          <ul ref={ulRef}>
            {autoComplete
              .filter((item) => {
                const regExp = new RegExp(`^${inputValue}`);
                return regExp.test(item);
              })
              .map((item, num) => {
                // 최대 10개만 보여주기
                if (num < 10) {
                  return (
                    <li
                      onClick={focusAutoComplete}
                      onKeyDown={focusAutoComplete}
                      key={num}
                      tabIndex="0"
                      className="autoComplete"
                    >
                      {item}
                    </li>
                  );
                }
                return null;
              })}
          </ul>
        ) : null}
      </InputContainer>
    </AutoCompleteBox>
  );
};

// AutoComplete 위치
const AutoCompleteBox = styled.div`
  margin-top: 150px;
`;

// input
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
  :focus-within {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  :after {
    content: "";
  }
  div {
    padding: 0 15px;
    position: relative;
    display: flex;
  }
  input {
    width: 100%;
    height: 40px;
    border: none;
    :focus {
      outline: none;
    }
  }

  /* 자동완성 */
  ul {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    li {
      padding: 0 15px;
      line-height: 1.4;
      :hover {
        background: #eee;
      }
      :first-child {
        margin-top: 10px;
      }
      :last-child {
        margin-bottom: 10px;
      }
    }
  }

  /* x 버튼 */
  button {
    position: relative;
    width: 20px;
    padding: 0;
    margin-left: 5px;
    border: none;
    background-color: #fff;
    cursor: pointer;
    :before,
    :after {
      position: absolute;
      top: 40%;
      left: 50%;
      width: 2px;
      height: 10px;
      border-radius: 2px;
      background-color: black;
      content: "";
    }
    :before {
      transform: rotate(45deg);
    }
    :after {
      transform: rotate(-45deg);
    }
  }
`;

AutoComplete.propTypes = {
  autoComplete: PropTypes.array.isRequired,
  setAutoComplete: PropTypes.func.isRequired,
};

export default AutoComplete;
