import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Modal = ({ showModal, setShowModal, modalText }) => {
  return (
    <ModalBox>
      {/* 모달버튼 */}
      <ModalBtn type="button" onClick={() => setShowModal(true)}>
        Open Modal
      </ModalBtn>
      {/* 모달창 */}
      {showModal ? (
        <ModalWindow>
          <div>
            <button onClick={() => setShowModal(false)} />
            <p>{modalText}</p>
          </div>
        </ModalWindow>
      ) : null}
    </ModalBox>
  );
};

// 중앙배치
const ModalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

// 모달버튼
const ModalBtn = styled.button`
  width: 120px;
  height: 50px;
  border: none;
  border-radius: 50px;
  background: var(--main-color);
  color: #fff;
  cursor: pointer;
`;

// 모달창 visibility로 컨트롤
const ModalWindow = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  > div {
    height: 120px;
    width: 300px;
    padding: 10px;
    border-radius: 20px;
    background: #fff;
  }
  p {
    padding-top: 25px;
    margin: auto;
    color: var(--main-color);
    text-align: center;
    font-weight: bold;
  }

  /* 모달닫기버튼 */
  button {
    position: relative;
    left: 50%;
    width: 25px;
    height: 25px;
    border: none;
    margin: 0;
    transform: translateX(-50%);
    background-color: transparent;
    cursor: pointer;
    :after,
    :before {
      position: absolute;
      display: block;
      top: 0;
      width: 2px;
      height: 15px;
      background: black;
      content: "";
    }
    :after {
      left: 50%;
      transform: rotate(45deg);
    }
    :before {
      left: 50%;
      transform: rotate(-45deg);
    }
  }
`;

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  modalText: PropTypes.string,
};

export default Modal;
