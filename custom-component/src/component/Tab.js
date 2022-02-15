import React, { useState } from "react";
import styled from "styled-components";

// Tab 컨텐츠
const Tab1 = () => <div>Tab menu One</div>;
const Tab2 = () => <div>Tab menu Two</div>;
const Tab3 = () => <div>Tab menu Three</div>;

// Tab 매뉴명, 컨텐츠
const tabMenu = [
  { name: "Tab1", con: <Tab1 /> },
  { name: "Tab2", con: <Tab2 /> },
  { name: "Tab3", con: <Tab3 /> },
];

const Tab = () => {
  const [tabBtn, setTebBtn] = useState(0);
  return (
    <>
      {/* 탭매뉴 */}
      <TabBox>
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
    width: calc((100% / ${tabMenu.length}) - 20px);
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
export default Tab;
