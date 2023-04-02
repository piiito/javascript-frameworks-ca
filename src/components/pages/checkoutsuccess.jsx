import React from "react";
import { Link } from "react-router-dom";
import * as Style from "./checkoutsuccess.styled";

function CheckoutSuccessPage(){
    
    return (
          <Style.SuccessPageContainer>
            <Style.SuccessPageHeading>Checkout was successful!</Style.SuccessPageHeading>
              <Style.SuccessPageButton as={Link} to="/">Return to home</Style.SuccessPageButton>
              </Style.SuccessPageContainer>)
  };

export default CheckoutSuccessPage;