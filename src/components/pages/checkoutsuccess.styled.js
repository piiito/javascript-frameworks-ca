import styled from "styled-components";

export const SuccessPageContainer = styled.div`
  text-align: center;
  height: 100vh;
`;

export const SuccessPageHeading = styled.h1`
  font-size: 18px;
  margin: 50px 0 30px;
`;

export const SuccessPageButton = styled.button`
  padding: 15px 20px;
  background-color: navy;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: lightblue;
  }
`;