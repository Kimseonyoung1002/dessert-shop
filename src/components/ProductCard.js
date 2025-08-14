import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';

const Card = styled.div `
width: 300px;
position: relative;
overflow: hidden;

&:hover .button-group {
opacity: 1;
}
`;

const Image = styled.img`
width: 100%;
height: 300px;
object-fit: cover;
border-radius: 20px;
`;

const Name = styled.h3`
font-size: 17px;
color: rgb(70, 70, 70);
padding-top:10px;
`;

const Price = styled.p`
font-size: 16px;
color: rgba(201, 29, 29, 1);
font-weight: bold;
`;

const ButtonGroup = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 10px;
  opacity: 0;
  transition: 0.3s ease;
  z-index: 2;
`;

const Button = styled.button`
background-color: rgba(255, 255, 255, 0.8);
color: #333;
border: 1px solid #ccc;
padding: 10px 30px;
border-radius: 8px;
cursor: pointer;
font-size: 10px;
&:hover {
background-color: black;
color: white;}`;



const ProductCard = ({ item }) => {

const navigate = useNavigate();
const dispatch = useDispatch();

const handleWish = () => {
  alert('로그인 후 관심상품을 등록해 주세요.');
};

const handleAddToCart = () => {
  dispatch(addItem(item));
  navigate('/cartPage');
};


  return (
    <Card>
      <Image img src={process.env.PUBLIC_URL +  item.image} alt={item.name} />
      <ButtonGroup className="button-group">
<Button onClick={handleWish}>WISH</Button>
<Button onClick={handleAddToCart}>ADD</Button>
      </ButtonGroup>
      <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Name>{item.name}</Name>
      <Price>{item.price.toLocaleString()}원</Price>
      </Link>
    </Card>
  );
};

export default ProductCard;
