import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Tab = ({ tabMenu }) => {
  const [tabBtn, setTebBtn] = useState(0);
  return (
    <>
      {/* 탭매뉴 */}
      <TabBox tabMenu={tabMenu}>
        {tabMenu.map((item, num) => (
          <div
            className={tabBtn === num ? "active" : ""}
            onClick={() => setTebBtn(num)}
            key={num}
          >
            {item.name}
          </div>
        ))}
      </TabBox>
      {/* 탭 컨텐츠 */}
      <Content>{tabMenu[tabBtn].con}</Content>
    </>
  );
};

// 탭매뉴
const TabBox = styled.nav`
  display: flex;
  justify-content: end;
  height: 70px;
  width: calc(100% - 80px);
  margin-left: auto;
  transform: translateY(-15px);
  background-color: #ddd;
  div {
    width: calc((100% / ${(prop) => prop.tabMenu.length}) - 20px);
    padding-left: 20px;
    box-sizing: border-box;
    color: #aaa;
    font-size: 20px;
    font-weight: bold;
    line-height: 70px;
    cursor: pointer;
  }
  .active {
    background-color: var(--main-color);
    color: #fff;
  }
`;

// 탭 컨텐츠
const Content = styled.div`
  div {
    width: 100%;
    height: 300px;
    text-align: center;
    font-size: 20px;
    line-height: 300px;
  }
`;

Tab.propTypes = {
  tabMenu: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, con: PropTypes.object })
  ).isRequired,
};

export default Tab;
