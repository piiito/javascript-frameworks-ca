import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  margin: 50px 0 100px;
`;

export const FormWrapper = styled.div`
  max-width: 600px;
  width: 150%;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #f8f8f8;
`;

export const Title = styled.h1`
text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  max-width: 100%;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 1rem;
  height: 10%;
  display: block;
  margin: 0 auto;

  @media screen and (max-width: 480px) {
    padding: 0.4rem;
    font-size: 0.9rem;
  }
`;

export const SubmitButton = styled.input`
  background-color: navy;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: lightblue;
  }
`;