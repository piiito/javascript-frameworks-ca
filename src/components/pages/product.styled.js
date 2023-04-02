import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;

  @media (max-width: 600px) {
    margin: 20px 0;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  padding: 20px;
  width: 500px;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    width: 100%;
    border: none;
    padding: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  margin: 0;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const ImageContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Description = styled.p`
  font-size: 18px;
  margin: 20px 0;
  text-align: left;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    margin-bottom: 10px;
  }
`;

export const DiscountedPrice = styled.span`
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const Discount = styled.span`
  font-size: 18px;
  margin-left: 10px;
  color: red;

  @media (max-width: 600px) {
    font-size: 16px;
    margin-left: 5px;
  }
`;

export const AddToCartButton = styled.button`
  background-color: navy;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 16px;
    padding: 8px 16px;
  }
`;

export const Reviews = styled.div`
  margin-top: 50px
  width: 500px;

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 30px;
  }
`;

export const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
  
`;

export const Rating = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-right: 20px;
`;

export const Username = styled.p`
  font-size: 14px;
  margin: 10px;
  display: inline-block;
  color: navy;

  @media (max-width: 600px) {
    font-size:
`;

export const ReviewDescription = styled.p`
  font-size: 16px;
`;