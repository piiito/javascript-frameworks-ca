import styled from "styled-components";


export const ProductContainer = styled.div`
margin: 2rem 0 2rem 0;
width: 100%;
display: flex;
justify-content: center;
gap: 2rem;
flex-wrap: wrap;
`;

export const HomepageHeading = styled.h1`
text-align: center
`;

export const ProductHeading = styled.h2`
  font-size: 18px;
  margin: 20 0px;
  text-align: center;
  color: black;
  
`;

export const Input = styled.input`
margin: auto;
`

export const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 400px;
    
  `;

  

export const ImageContainer = styled.div`
  width: 300px;
  height: 200px;
  overflow: hidden;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PriceContainer = styled.div`
  font-size: 1.2rem;
  paddiing: 20px 0 ;
  text-align: center;
`;

export const DiscountedPrice = styled.span`
  font-weight: bold;
`;

export const Discount = styled.span`
  font-size: 0.8rem;
  color: #666;
`;