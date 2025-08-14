import react from "react";
import styled from "styled-components";
import products from '../data/desserts';
import ProductCard from '../components/ProductCard';


const ProductGrid = styled.div`
display: flex;
 flex-wrap: wrap;
  gap: 20px;
  padding: 50px 0; 
  width: 1280px;
  margin: 0 auto;
`
const Title = styled.h2`
  margin-top: 150px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 50px;

`;

const Left = styled.div`
width: 1280px;
margin: 0 auto;
  position: relative;
  padding-bottom: 16px;
font-size: 14px;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #ccc;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`



const ShopPage = () => {
    return (
        <div>
            <Title>shop</Title>
            <Left>총 16개의 상품이 있습니다.</Left>
        <ProductGrid>
            {products.map((item) => (
                <ProductCard key={item.id} item={item} />
            ))}
        </ProductGrid>
        </div>
    )
}

export default ShopPage;
