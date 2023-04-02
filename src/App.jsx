import React, { useState } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { useCart } from './components/useCart';
import styled from 'styled-components';
import ContactPage from './components/pages/contact';
import HomePage from './components/pages/home';
import CheckoutPage from './components/pages/checkout';
import ProductPage from './components/pages/product';
import CheckoutSuccessPage from './components/pages/checkoutsuccess';
import CartIcon from "./components/images/shopping-cart.png";
import styles from "./components/styles/cart.module.css"


function Home() {
  return <HomePage />;
}

function Product() {
  return <ProductPage />;
}


function Checkout() {
  return <CheckoutPage />;
}


function CheckoutSuccess() {
  return <CheckoutSuccessPage />;
}


function Contact() {
  return <ContactPage />;
}



function Nav() {
  const { cart, products, removeFromCart} = useCart();
  return (
    <StyleNav>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">Contact</NavLink>
        </NavItem>
        <NavItem className={styles.navLink}>
          <NavLink to="/checkout"><div className={styles.cartAmount}id="cartAmount"></div>
            <img  src={CartIcon} />
          </NavLink>
        </NavItem>
      </NavList>
    </StyleNav>
  );
}

const StyleNav = styled.nav`
display: flex;
background-color: lightblue;
justify-content: space-between;
align-items: center;
@media (max-width: 768px) {
  margin-top: 20px;
}
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  &:last-child {
    margin-left: auto;
`;

const NavItem = styled.li`
  padding: 10px;
  text-decoration: none;
  color: black;
  :last-child {
    margin-left: auto;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  :hover{
    color: darkred;
  }
`;


function Header() {
  return (
    <StyleHeader>
      <Logo>E-commerce store</Logo>
      <Nav />
    </StyleHeader>
  );
}
const StyleHeader = styled.header`
  background-color: lightblue;
  color: navyblue;
  padding: 10px;
  width: auto;
`;

const Logo = styled.h1`
  font-size: 24px;
  margin-left: 30px;
`;

function Footer() {
  return (
    <StyleFooter>
      <div>© Birgitte Vedaa, 2023</div>
    </StyleFooter>
  );
}
const StyleFooter = styled.footer`
  background-color: lightblue;
  color: #white
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  position: fixed
  bottom: 0;
  }
`;



function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}


function App() {
  

  return (
    
  <div>
    <Routes>
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="contact" element={<Contact />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="checkoutsuccess" element={<CheckoutSuccess />} />
      </Route>
  </Routes>
    
  
      </div>
  )
  
  



}

export default App;
