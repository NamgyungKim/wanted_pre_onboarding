import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ClickToEdit = ({ form, setForm }) => {
  let inputRef = useRef();

  // 포커스 아웃 시
  // input에 입력값 set으로 상태 변경
  const onBlur = (e) => {
    const newForm = form.map((item) => {
      if (item.label === e.target.name)
        return { ...item, text: e.target.value, chainge: false };
      return item;
    });
    setForm(newForm);
  };

  // 클릭시 chainge: true로 변경
  const clickForm = (index) => {
    const newForm = form.map((item, i) => {
      if (index === i) return { ...item, chainge: true };
      return item;
    });
    setForm(newForm);
  };

  // form 변경시 input에 바로 포커스
  // input value에 item.text 입력
  useEffect(() => {
    form.forEach((item) => {
      if (item.chainge === true) {
        inputRef.current.focus();
        inputRef.current.value = item.text;
      }
    });
  }, [form]);

  return (
    <FormBox>
      {form.map((item, index) =>
        item.chainge ? (
          <div key={index}>
            <label>{item.label}</label>
            <input
              name={item.label}
              ref={inputRef}
              onBlur={onBlur}
              type="text"
            />
          </div>
        ) : (
          <div key={index}>
            <span>{item.label}</span>
            <div name={item.label} onClick={() => clickForm(index)}>
              {item.text}
            </div>
          </div>
        )
      )}

      <p>{form.map((item) => `${item.label} ${item.text} `)}</p>
    </FormBox>
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

ClickToEdit.propTypes = {
  form: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      text: PropTypes.any,
      chainge: PropTypes.bool,
    })
  ).isRequired,
  setForm: PropTypes.func.isRequired,
};

export default ClickToEdit;
