import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import CartPage from "../pages/CartPage";

const HeaderWrapper = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
height: 100px;
border-bottom: 1px solid #ccc;


  position: fixed;  
  top: 0;          
  left: 0;
  width: 100%;      
  height: 100px;
  border-bottom: 1px solid #ccc;
  background-color: white;
  z-index: 1000;   
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

const LogoImg = styled.img`
  width: 200px;
`;

const NavTabWrapper = styled.nav`
  display: flex;
  gap: 30px;
`;

const NavTab = styled(Link)`
  font-size: 20px;
text-decoration: none;
color: rgb(70, 70, 70);
font-weight: bold;
`;

const NavItem = styled(Link)`
 img {
    width: 30px;
    height: 30px;
    display: block;
  }

`;



const Header = () => {
  return (
    <HeaderWrapper>
      <LeftGroup>
        <Link to="/">
          <LogoImg src={process.env.PUBLIC_URL + '/images/logo.jpg'} alt="로고" />
        </Link>
        <NavTabWrapper>
          <NavTab to="/about">Bomnal&</NavTab>
          <NavTab to='/shop'>Shop</NavTab>
          <NavTab to="/community">Community</NavTab>
        </NavTabWrapper>
      </LeftGroup>

      <Nav>
        <NavItem href="#"><img src={process.env.PUBLIC_URL + '/images/search.png'} alt="검색" /></NavItem>
        <NavItem href="#"><img src={process.env.PUBLIC_URL + '/images/member.png'} alt="마이페이지" /></NavItem>
        <NavItem to="/CartPage"><img src={process.env.PUBLIC_URL + '/images/cart.png'} alt="장바구니" /></NavItem>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;