import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import products from "../data/desserts";
import { useNavigate } from "react-router-dom";
import { addItem } from '../store/cartSlice'
import { useDispatch } from "react-redux";
import { useState } from "react";



const DetailWrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding: 150px 20px 40px;
  box-sizing: border-box;
`;

const ContentBox = styled.div`
  display: flex;
  gap: 10px;
`;

const InfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 28px;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin: 10px 0;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 2px solid black;
  margin: 20px 0;
`;
const DividerSecond = styled.hr`
  border: none;
  border-top: 2px solid #ccc;
  margin: 20px 0;
`; 
const DividerThird = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 20px 0;
`; 
const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 500px;
    object-fit: contain;
  }
`;

const ButtonBox = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 10px;
`;

const Button = styled.button`

  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 50%;
 font-family: 'LeeSeoYoon', sans-serif;
  &:hover {
    background-color: #555;
  }
`;

const CartButton = styled.button`
  padding: 10px 20px;
  background-color: white;
  color: #ccc;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
width: 50%;
 font-family: 'LeeSeoYoon', sans-serif;
  &:hover {
     border: 1px solid black;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: bold;
  width: 150px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
`;

const QuantityButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: 24px;
  background-color: #f5f5f5;
  border: none;
  cursor: pointer;
`;

const QuantityValue = styled.div`
  flex: 1;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  background-color: #fff;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
`;

const ProductImg = styled.div`
margin: 0 auto;
width: 1000px;
`;


const Tabs = styled.div`
width:1280px;
height: 40px;
display: flex;
border-bottom: 1px solid #ddd;
margin: 30px 0;
padding-top: 150px;

`;

const DetailTab = styled.a`
flex:1;
text-align:center;
cursor: pointer;
color: rgb(70, 70, 70);
  text-decoration: none;

  &:hover {
    border-bottom:1px solid black;
  }
`;


const TabContent = styled.div`
  width: 100%;
`;

const ReviewWrapper = styled.div`
padding: 20px;
`;

const ReviewItem = styled.div`
padding: 20px 0;
border-bottom: 1px solid #ddd;
`;

const ReviewerName = styled.p`
font-weight: bold;
margin-bottom: 6px;
`;


const Stars = styled.div`
color:black;
font-size: 20px;
margin-bottom: 8px;
`;

const ReviewText = styled.p`

font-size: 16px;
color: #333;
margin-bottom:10px;
`;

const ReviewImages = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;


const ReviewImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #ccc;
`;


const Score = styled.div`
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ReviewCount = styled.span`
  font-size: 16px;
  color: #999;
  margin-left: 5px;
`;

const TitleReview = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
  width: 1280px;
 
  background-color: #eee;
  border-radius: 10px;
  padding: 20px;


  display: flex;
  align-item: center;
`;



const ReviewImageBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  margin-bottom: 20px;
  
`;

const LargeReviewImage = styled.img`
width: 150px;
height: 150px;
border-radius: 10px;


`

const fakeReviews = [
  {
    id: 1,
    user: "ys***95",
    rating: 5,
    comment:
      "달콤세트 정말 맛있어요! 포장을 열자마자 향긋한 냄새가 퍼졌고, 비주얼도 고급스러웠어요. 특히 체리맛은 처음엔 낯설었지만 먹어보니 정말 잘 어울리더라고요. 부모님도 맛있다고 하셔서 가족끼리 다같이 즐겼어요. 재구매 의사 100%입니다.",
    images: ["/images/review01.jpg", "/images/review02.jpg"],
  },
  {
    id: 2,
    user: "kc***12",
    rating: 4,
    comment:
      "배송이 정말 빠르게 와서 놀랐어요. 회사 간식으로 돌렸는데 다들 어디서 샀냐고 물어보더라고요. 제품도 꼼꼼하게 포장되어 있어서 좋았고, 찢어지거나 눅눅한 부분 없이 상태가 아주 좋았습니다. 다만 제 입맛에는 약간 단 편이라 많이는 못 먹겠더라고요. 그래도 선물용으로는 정말 추천드려요!",
    images: ["/images/review03.jpg", "/images/review04.jpg"],
  },
  {
    id: 3,
    user: "je***09",
    rating: 5,
    comment:
      "부모님 선물용으로 구매했는데 너무 좋아하셨어요. 패키지도 고급스럽고, 약과 맛이 일반적인 맛이 아니라 과일향도 나고 신기했어요. 부담스럽지 않은 단맛이라 연세 있으신 분들도 잘 드시더라고요. 포장 상태도 완벽했습니다.",
    images: ["/images/review05.jpg"],
  },
  {
    id: 4,
    user: "hg***77",
    rating: 3,
    comment:
      "전체적으로 괜찮았지만 양이 생각보다 적게 느껴졌어요. 맛은 달콤하고 바삭해서 좋았지만, 여러 명이 함께 먹기엔 부족할 수 있어요. 혼자 먹기엔 충분하고, 커피랑 같이 먹으면 딱입니다. 가성비는 조금 아쉬웠어요.",
    images: ["/images/review06.jpg", "/images/review07.jpg"],
  },

];



const ViewMore = styled.div`
width: 1280px;
height: 40px;
border-radius: 10px;
background-color:#eee;
padding: 10px;
margin: 20px 0;
display: flex;
align-items: center;
justify-content: center; 
font-size: 18px;

`;

const QnaTitleBox = styled.div`
display: flex;
width: 1280px;
justify-content: space-between;
`;


const QnaTitle = styled.div`
font-weight: bold;
font-size: 25px;
`;


const ListBox = styled.div`
display: flex;
gap: 20px;
align-items: center;
justify-content: center; 

`;

const List = styled.div`
display: flex;
width: 80px;
height: 40px;
border: 1px solid #ccc;

align-items: center;
justify-content: center; 
  cursor: pointer;
  &:hover {
    border: 1px solid black;
  }
`;


const Write = styled.div`

display: flex;
gap: 20px;
width: 80px;
height: 40px;
border: 1px solid #ccc;

align-items: center;
justify-content: center; 
  cursor: pointer;
  &:hover {
    border: 1px solid black;
  }

`;


const QnaContent = styled.div`
height: 200px;
width: 1280px;

display: flex;
align-items: center;
justify-content: center;
 
`;

const DeliveryBox = styled.div`
display: flex;
justify-content: space-between;
width: 1280px;

`;


const DeliveryCol = styled.div`
width: 48%

`;

const DeliveryTitle = styled.div`
font-weight: bold;
font-size: 18px;
padding: 10px 0;
color: black;
`;
const DeliveryContent = styled.div`
font-size:16px;
padding: 20px;
 color: rgb(70, 70, 70);
`;


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




const DetailPage = () => {
  const navigate = useNavigate();
  // const cartClick = () => {
  //    navigate('/CartPage')
  // };
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
    const handleAddToCart = () => {
    dispatch(addItem(product));
    setShowModal(true);
  };


  return (
    <>
    <DetailWrapper>

      <ContentBox>
        <ImageSection>
          <img src={process.env.PUBLIC_URL +  product.image} alt={product.name} />
        </ImageSection>

        <InfoSection>
          <Divider />
          <h2>{product.name}</h2>
          <Wrapper>
            <Title>
              <p>가격</p>
              <p>국내&middot;해외배송</p>
              <p>배송방법</p>
              <p>배송비</p>
            </Title>
            <Content>
              <p>{product.price}원</p>
              <p>국내배송</p>
              <p>택배</p>
              <p>4,000원 (40,000원 이상 구매 시 무료)</p>
            </Content>
          </Wrapper>
          <DividerSecond />
          <Wrapper>
            <p>{product.name}</p>
            <QuantityBox>
              <QuantityButton>-</QuantityButton>
              <QuantityValue>1</QuantityValue>
              <QuantityButton>+</QuantityButton>
            </QuantityBox>
          </Wrapper>
          <DividerThird />
          <Wrapper><Title>TOTAL</Title> <Content>{product.price}원</Content></Wrapper>
          <ButtonBox>
            <Button>BUY IT NOW</Button>
            {/* <CartButton onClick={cartClick}>CART</CartButton> */}
            <CartButton onClick={handleAddToCart}>ADD</CartButton>
          </ButtonBox>
        </InfoSection>
      </ContentBox>
      <Tabs id="detail">
        <DetailTab href="#detail">상세정보</DetailTab>
        <DetailTab href="#review">상품후기</DetailTab>
        <DetailTab href="#qna">상품문의</DetailTab>
        <DetailTab href="#delivery">배송/교환/환불 안내</DetailTab>
      </Tabs>
      <TabContent>
        <section id="detail">
          <ProductImg>
            <img src={process.env.PUBLIC_URL + "/images/detail01.png"} alt="디테일 이미지01" />
            <img src={process.env.PUBLIC_URL + "/images/detail02.png"} alt="디테일 이미지02" />
            <img src={process.env.PUBLIC_URL + "/images/detail03.png"} alt="디테일 이미지03" />
            <img src={process.env.PUBLIC_URL + "/images/detail04.png"} alt="디테일 이미지04" />
          </ProductImg>
        </section>
        <Tabs id="review">
          <DetailTab href="#detail">상세정보</DetailTab>
          <DetailTab href="#review">상품후기</DetailTab>
          <DetailTab href="#qna">상품문의</DetailTab>
          <DetailTab href="#delivery">배송/교환/환불 안내</DetailTab>
        </Tabs>
        <section >
          <ReviewWrapper>
            <Score>
              &#9733; 4.8
              <ReviewCount>· 리뷰 129개</ReviewCount>
            </Score>
            <TitleReview><img src={process.env.PUBLIC_URL + "/images/love_icon.png"} alt="하트 아이콘" style={{ width: "20px", height: "20px", paddingRight: "10px" }} /> 구매자의 98%가 만족한 상품이에요.</TitleReview>
            <ReviewImageBox>
              {fakeReviews.map((review) => {
                return review.images.map((src, index) => {
                  return (
                    <LargeReviewImage
                      key={`${review.user}-${index}`}
                      src={process.env.PUBLIC_URL + src}
                      alt={`리뷰이미지 ${index + 1}`} />
                  );
                });
              })}
            </ReviewImageBox>
            {fakeReviews.map((review) => (
              <ReviewItem key={review.id}>
                <ReviewerName>{review.user}</ReviewerName>
                <Stars>{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</Stars>
                <ReviewText>{review.comment}</ReviewText>
                <ReviewImages>
                  {review.images.map((src, index) => (
                    <ReviewImage key={index} src={process.env.PUBLIC_URL + src} alt={`리뷰 이미지 ${index + 1}`}
                    />
                  ))}
                </ReviewImages>
              </ReviewItem>
            ))}
            <ViewMore>
              리뷰 더보기
            </ViewMore>
          </ReviewWrapper>
        </section>
        <Tabs id="qna">
          <DetailTab href="#detail">상세정보</DetailTab>
          <DetailTab href="#review">상품후기</DetailTab>
          <DetailTab href="#qna">상품문의</DetailTab>
          <DetailTab href="#delivery">배송/교환/환불 안내</DetailTab>
        </Tabs>
        <section>
          <QnaTitleBox>
            <QnaTitle>Q&A</QnaTitle>
            <ListBox>
              <List>LIST</List>
              <Write>WRITE</Write>
            </ListBox>
          </QnaTitleBox>
          <QnaContent>게시물이 없습니다.</QnaContent>
        </section>


     <Tabs id="delivery">
          <DetailTab href="#detail">상세정보</DetailTab>
          <DetailTab href="#review">상품후기</DetailTab>
          <DetailTab href="#qna">상품문의</DetailTab>
          <DetailTab href="#delivery">배송/교환/환불 안내</DetailTab>
        </Tabs>
        <section >
          <DeliveryBox>
          <DeliveryCol>
<DeliveryContent>
  <DeliveryTitle>PAYMENT INFO</DeliveryTitle>

  <p>고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도 있습니다. 확인과정에서 도난 카드의 사용이나 타인 명의의 주문등 정상적인 주문이 아니라고 판단될 경우 임의로 주문을 보류 또는 취소할 수 있습니다.</p> 

<p>무통장 입금은 상품 구매 대금은 PC뱅킹, 인터넷뱅킹, 텔레뱅킹 혹은 가까운 은행에서 직접 입금하시면 됩니다.  </p> 
<p>주문시 입력한 입금자명과 실제입금자의 성명이 반드시 일치하여야 하며, 7일 이내로 입금을 하셔야 하며 입금되지 않은 주문은 자동취소 됩니다.</p> 
</DeliveryContent>
<DeliveryContent>
  <DeliveryTitle>EXCHANGE INFO</DeliveryTitle>
  교환 및 반품 주소
 - 경기도 안성시 일죽면 일생로 158 1층 5번 도크
 
<p>교환 및 반품이 가능한 경우</p>
<p>- 계약내용에 관한 서면을 받은 날부터 7일. 단, 그 서면을 받은 때보다 재화등의 공급이 늦게 이루어진 경우에는 재화등을 공급받거나 재화등의 공급이 시작된 날부터 7일 이내</p>
 <p>- 공급받으신 상품 및 용역의 내용이 표시.광고 내용과 다르거나 계약내용과 다르게 이행된 때에는 당해 재화 등을 공급받은 날 부터 3월이내, 그사실을 알게 된 날 또는 알 수 있었던 날부터 30일이내</p>
 
교환 및 반품이 불가능한 경우<br />
<p>- 이용자에게 책임 있는 사유로 재화 등이 멸실 또는 훼손된 경우(다만, 재화 등의 내용을 확인하기 위하여 포장 등을 훼손한 경우에는 청약철회를 할 수 있습니다)</p> 
 <p> - 이용자의 사용 또는 일부 소비에 의하여 재화 등의 가치가 현저히 감소한 경우</p> 
  <p> - 시간의 경과에 의하여 재판매가 곤란할 정도로 재화등의 가치가 현저히 감소한 경우</p> 
  <p> - 복제가 가능한 재화등의 포장을 훼손한 경우</p> 
  <p> - 개별 주문 생산되는 재화 등 청약철회시 판매자에게 회복할 수 없는 피해가 예상되어 소비자의 사전 동의를 얻은 경우</p> 
  <p> - 디지털 콘텐츠의 제공이 개시된 경우, (다만, 가분적 용역 또는 가분적 디지털콘텐츠로 구성된 계약의 경우 제공이 개시되지 아니한 부분은 청약철회를 할 수 있습니다.)</p> 
 
※ 고객님의 마음이 바뀌어 교환, 반품을 하실 경우 상품반송 비용은 고객님께서 부담하셔야 합니다.
 (색상 교환, 사이즈 교환 등 포함)
</DeliveryContent>
          </DeliveryCol>
         <DeliveryCol>
          <DeliveryContent>
  <DeliveryTitle>DELIVERY INFO</DeliveryTitle>
<p> 배송 방법 : 택배</p>
<p> 배송 지역 : 제주 / 도서산간지역 제외한 전국지역</p>
<p> 배송 비용 : 4,000원</p>
<p> 배송 기간 : 2일 ~ 7일</p>
<p> 배송 안내 : - 산간벽지나 도서지방은 배송이 불가한 점 양해 부탁드립니다.</p>
고객님께서 주문하신 상품은 입금 확인후 배송해 드립니다. 다만, 상품종류에 따라서 상품의 배송이 다소 지연될 수 있습니다.
</DeliveryContent>
          </DeliveryCol>
          </DeliveryBox>

        </section>
      </TabContent>
    </DetailWrapper>


{showModal && (<ModalBackdrop>
<ModalContent>
  <p>상품이 장바구니에 담겼습니다.</p>
  <ModalButtonGroup>
    <ModalButton onClick={() => setShowModal(false)}>계속 쇼핑</ModalButton>
    <ModalButton onClick={() => navigate('/cartPage')}>장바구니로 이동</ModalButton>
  </ModalButtonGroup>
</ModalContent>
</ModalBackdrop>)}



</>




  );
};

export default DetailPage;