import React from "react";
import { useCart } from "../useCart";
import * as Style from "./checkout.styled";
import { Link } from 'react-router-dom';


export default function CheckoutPage() {
  const { cart, clearCart, findTotal } = useCart();
  const total = findTotal();

  function onCheckoutClick() {
    clearCart();
  }

 

return (
<Style.CartContainerWrapper>
    <Style.CartContainer>
    <Style.Title>Cart</Style.Title>
    <div>
        {cart.length !== 0 ?
        <Style.CartList>
            {cart.map((product, index) => (
            <Style.CartItem key={product.id+index}>
                <Style.Image src={product.imageUrl} alt={product.title} />
                <Style.ItemDetails>
                <Style.ItemTitle>{product.title}</Style.ItemTitle>
                <Style.ItemPrice>{product.discountedPrice},-</Style.ItemPrice>
                </Style.ItemDetails>
            </Style.CartItem>
            ))}
        </Style.CartList>
        : <div>Your cart is empty!</div>
        }
        <Style.Total><span>Total</span><span>{total},-</span></Style.Total>
        <Style.ButtonsContainer>
        <Style.ClearCartButton onClick={onCheckoutClick}>Clear Cart</Style.ClearCartButton>
        {total >= 0.01
            ? <Style.CheckoutButton as={Link} to="/checkoutsuccess" onClick={() => clearCart()}>Checkout</Style.CheckoutButton>
            : <Style.CheckoutButton disabled>Checkout</Style.CheckoutButton>
        }
        </Style.ButtonsContainer>
    </div>
    </Style.CartContainer>
</Style.CartContainerWrapper>
);
};

