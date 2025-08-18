import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeItem, decreaseQuantity, addItem, clearCart } from '../store/cartSlice';

const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding-top: 150px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 50px;

`;

const CartNotice = styled.div`
  text-align: center;
  font-size: 18px;
  padding-bottom: 300px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
`;

const ItemInfo = styled.div`
  flex-grow: 1;
`;

const ItemName = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const ItemPrice = styled.div`
  color: #c91d1d;
  font-weight: bold;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  padding: 4px 12px;
  cursor: pointer;
  margin-right: 10px;
  border: none;
`;

// const ClearButton = styled.button`
//   margin-top: 20px;
//   padding: 8px 16px;
//   background-color: white;
//   border: 1px solid black;
//   color: black;
//   border-radius: 10px;
// `;

// const BuyButton = styled.button`
//  margin-top: 20px;
//   padding: 8px 16px;
//   background-color: black;
//   color: white;
//   border: none;
//   border-radius: 10px;
// `;

const ButtonBox = styled.div`
 display: flex;
    margin-bottom: 50px;
    justify-content: flex-end;
     
`;

const Total = styled.div`
 display: flex;
    justify-content: flex-end;
     font-weight: bold;
        font-size: 20px;
        padding: 20px 0;

`;


const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleIncrease = (item) => {
    dispatch(addItem(item));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container>
      <Title>장바구니</Title>
      {cartItems.length === 0 ? (
        <CartNotice>장바구니가 비어 있습니다.</CartNotice>
      ) : (
        <>
          {cartItems.map(item => (
            <Item key={item.id}>
              <ItemImage img src={process.env.PUBLIC_URL +  item.image} alt={item.name} />
              <ItemInfo>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>
              </ItemInfo>
              <QuantityControl>
                <Button type="button"
                  className="btn btn-light btn-sm"
                  style={{
                    '--bs-btn-padding-y': '0.75rem',
                    '--bs-btn-padding-x': '2rem',
                    '--bs-btn-font-size': '18px'
                  }}
                  onClick={() => handleDecrease(item.id)}>-</Button>
                <div>{item.quantity}</div>
                <Button type="button"
                  className="btn btn-light btn-sm me-2"
                  style={{
                    '--bs-btn-padding-y': '0.75rem',
                    '--bs-btn-padding-x': '2rem',
                    '--bs-btn-font-size': '18px'
                  }}
                  onClick={() => handleIncrease(item)}>+</Button>
              </QuantityControl>
              <Button type="button"
                className="btn btn-outline-secondary btn-sm" onClick={() => handleRemove(item.id)}>삭제</Button>
            </Item>
          ))}


          <Total>총 합계: {totalPrice.toLocaleString()}원</Total>
          <ButtonBox>
            <Button type="button" 
                    className="btn btn-light"

              onClick={handleClear}>장바구니 비우기</Button>
            <Button type="button" className="btn btn-dark">구매하기</Button>
          </ButtonBox>
        </>
      )}
    </Container>
  );
};

export default CartPage;
