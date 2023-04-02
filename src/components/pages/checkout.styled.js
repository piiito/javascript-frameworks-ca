import styled from "styled-components";

export const CartContainerWrapper = styled.div`
min-height: 100vh;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  max-width: 800px;
  
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const CartList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const ItemTitle = styled.h2`
  font-size: 1.2rem;
  margin: 0;
`;

export const ItemPrice = styled.div`
  font-size: 1rem;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
`;

export const ClearCartButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: lightblue;
  color: #333;
  font-size: 1rem;
  cursor: pointer;
`;

export const CheckoutButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: ${props => props.disabled ? "grey" : "navy"};
  color: ${props => props.disabled ? "lightgrey" : "white"};
  font-size: 1rem;
  cursor: ${props => props.disabled ? "default" : "pointer"};
`;