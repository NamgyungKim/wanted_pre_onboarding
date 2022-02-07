import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  h1{
    margin-left:20px;
    font-size: 20px;
    font-weight: bold;
  }

  :root{
    --main-color:#3d51ff;
  }
`;

export const Box = styled.div`
  position: relative;
  height: 400px;
  margin: 10px;
  padding: 20px 0;
  border: 2px solid #ddd;
  border-radius: 20px;
`;
