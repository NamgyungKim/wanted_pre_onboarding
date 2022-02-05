import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  h1{
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Box = styled.div`
  height: 400px;
  margin: 10px;
  padding: 20px;
  border: 2px solid #ddd;
  border-radius: 20px;
`;
