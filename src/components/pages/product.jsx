import React from "react";
import { useParams } from 'react-router-dom';
import useAPI from "../useAPI";
import { useCart } from "../useCart";
import * as Style from "./product.styled";

export default function ProductPage() {
  const { addToCart } = useCart();
  let params = useParams();

function onAddToCartClick(e) {
  addToCart(e)
}

    const { data, isLoading, isError } = useAPI(
        'https://api.noroff.dev/api/v1/online-shop/'+params.id
      );
    
      if (isLoading) {
        return<div>
        <h1>
          Product Page
        </h1>
        <div>
        </div>
      </div>
    ;
    }
        
    
      if (isError) {
        return<div>
        <h1>
          Product Page
        </h1>
        <div>
          Error! Please refresh.
        </div>
      </div>
    ;
    }
        
  
      const reviews = data.reviews;
    
    return (
            <Style.Container>
                <Style.ProductContainer>
                    <Style.Title>{data.title}</Style.Title>
                    <Style.ImageContainer>
                        <Style.Image src={data.imageUrl} />
                    </Style.ImageContainer>
                    <div>
                        <Style.Description>{data.description}</Style.Description>
                        <Style.PriceContainer>{ 
                            data.discountedPrice === data.price
                            ? data.discountedPrice+",-"
                            : <Style.DiscountedPrice>{data.discountedPrice},- <Style.Discount>{((data.price - data.discountedPrice) / data.price * 100).toFixed(0)}% OFF</Style.Discount></Style.DiscountedPrice>
                            }
                        </Style.PriceContainer>
                        <Style.AddToCartButton onClick={() => onAddToCartClick(data)}>Add to cart</Style.AddToCartButton>
                    </div>
                </Style.ProductContainer>
                    <h2>Reviews</h2>
                     { reviews ? reviews.map((review) => (
                        <Style.Reviews key={review.id}>
                        <Style.ReviewContainer>
                            <Style.Rating>{review.rating}/5</Style.Rating>
                            <Style.ReviewDescription>{review.description}</Style.ReviewDescription>
                            <Style.Username>- {review.username}</Style.Username> 
                         </Style.ReviewContainer>
                        </Style.Reviews>
                     ))
                    :   ""}
            </Style.Container>
        );
  }



