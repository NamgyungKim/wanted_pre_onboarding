import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Box } from "../styles/GlobalStyles";

const ClickToEdit = () => {
  const [name, setName] = useState({
    label: "이름",
    text: "김남경",
    chainge: false,
  });
  const [age, setAge] = useState({
    label: "나이",
    text: 26,
    chainge: false,
  });

  const inputName = useRef();
  const inputAge = useRef();

  const nameOnBlur = (e) =>
    setName({ ...name, text: e.target.value, chainge: false });
  const ageOnBlur = (e) =>
    setAge({ ...age, text: e.target.value, chainge: false });

  useEffect(() => {
    if (name.chainge && inputName.current) {
      inputName.current.focus();
      inputName.current.value = name.text;
    }
  }, [name]);
  useEffect(() => {
    if (age.chainge && inputAge.current) {
      inputAge.current.focus();
      inputAge.current.value = age.text;
    }
  }, [age]);

  return (
    <Box>
      <h1>ClickToEdit</h1>
      <FormBox>
        {/* 이름 */}
        {name.chainge ? (
          <div>
            <label>{name.label}</label>
            <input
              ref={inputName}
              name="name"
              onBlur={nameOnBlur}
              type="text"
            />
          </div>
        ) : (
          <div>
            <span>{name.label}</span>
            <div onClick={() => setName({ ...name, chainge: true })}>
              {name.text}
            </div>
          </div>
        )}
        {/* 나이 */}
        {age.chainge ? (
          <div>
            <label>{age.label}</label>
            <input ref={inputAge} name="name" onBlur={ageOnBlur} type="text" />
          </div>
        ) : (
          <div>
            <span>{age.label}</span>
            <div onClick={() => setAge({ ...age, chainge: true })}>
              {age.text}
            </div>
          </div>
        )}

        <p>
          {name.label} {name.text} {age.label} {age.text}
        </p>
      </FormBox>
    </Box>
  );
};

const FormBox = styled.form`
  width: 220px;
  margin: auto;
  > div {
    display: flex;
    text-align: center;
    margin-top: 40px;
    > div {
      width: 180px;
      height: 30px;
      border: 1px solid #ddd;
    }
  }

  label {
    margin-right: auto;
    line-height: 30px;
  }
  input {
    width: 180px;
    height: 30px;
    padding: 0;
    margin: 0;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 3px;
    :focus {
      outline: 2px solid var(--main-color);
    }
  }

  span {
    margin-right: auto;
  }

  p {
    text-align: center;
    margin-top: 50px;
  }
`;

export default ClickToEdit;
