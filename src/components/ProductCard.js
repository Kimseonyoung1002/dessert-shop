import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';

const Card = styled.div`
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
color: rgb(70, 70, 70);
border: 1px solid #ccc;
padding: 10px 30px;
border-radius: 8px;
cursor: pointer;
font-size: 10px;
&:hover {
background-color: black;
color: white;}`;

const ModalBackdrop = styled.div`

position: fixed;
top:0;
left:0;
width:100%;
height: 100%;
background-color: rgba(0,0,0,0.5);
display: flex;
justify-content: center;
align-items: center;
z-index:999;

`

const ModalContent = styled.div`
width: 200px;
height: 100px;
background: white;
padding: 30px;
border-radius: 10px;
text-align: center;
z-index: 1000;
`
const ModalButton = styled.div`

background-color: rgba(255, 255, 255, 0.8);
color: rgb(70, 70, 70);
border: 1px solid #ccc;
border-radius: 8px;
width: 150px;
height: 40px;
font-size: 14px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
&:hover {
background-color: black;
color: white;}`

const ModalButtonGroup =styled.div `
display: flex;
gap: 10px;
justify-content: center;
padding-top: 10px;
`



const ProductCard = ({ item }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleWish = () => {
    alert('로그인 후 관심상품을 등록해 주세요.');
  };

  const handleAddToCart = () => {
    dispatch(addItem(item));
    setShowModal(true);
  };
  return (

    <>
      <Card>
        <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Image src={process.env.PUBLIC_URL + item.image} alt={item.name} />
          <Name>{item.name}</Name>
          <Price>{item.price.toLocaleString()}원</Price>
         </Link>
                 <ButtonGroup className="button-group">
          <Button onClick={handleWish}>WISH</Button>
          <Button onClick={handleAddToCart}>ADD</Button>
        </ButtonGroup>
      </Card>

      {showModal && (<ModalBackdrop>
        <ModalContent>
          <p>상품이 장바구니에 담겼습니다.</p>
                     <ModalButtonGroup className="button-group">
            <ModalButton onClick={() => setShowModal(false)}>계속 쇼핑</ModalButton>
            <ModalButton onClick={() => navigate('/cartPage')}>장바구니로 이동</ModalButton>
          </ModalButtonGroup>
        </ModalContent>
      </ModalBackdrop>)}
    </>

  );
};

export default ProductCard;
