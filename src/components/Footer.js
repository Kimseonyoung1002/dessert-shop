import React from "react";
import styled from "styled-components";



const FooterWrapper = styled.footer`
width:100%;
  padding: 40px 0;
background-color: #eee;
`;

const FooterContent = styled.div`
display: flex;
  justify-content: space-between;
  width: 1280px;
  margin: 0 auto;
 
`;

const FooterColumn = styled.div`
width: fit-content;
display: flex;
flex-direction: column;
gap: 20px;

`;

const LogoBox = styled.div`
img {
width: 200px;}
`;

const LinkGroup = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 20px;
font-size: 14px;
cursor: pointer;

`;


const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InfoItem = styled.div`
  display: flex;
  gap: 10px;
  font-size: 14px;
`;

const Label = styled.p`
  font-weight: bold;
  margin: 0;
`;

const Text = styled.p`
  margin: 0;
`;

const Copyright = styled.div`
color: black
`;



const FooterTop = styled.div`
  border-bottom: 1px solid #ddd;
  padding-bottom: 40px;
  margin-bottom: 20px;
`;

const FooterBottom = styled.div`
  padding-top: 20px;
`;

const Img = styled.div`
img {
width: 25px;
height: 25px;};
cursor: pointer;
`;

const Sns = styled.div`
display: flex;
`;

const FooterNav = styled.div`
  width: 1280px;
  margin: 0 auto 20px;
`



const Footer = () => {
    return (
        <FooterWrapper>
              <FooterTop>
            <FooterNav>
                <LogoBox>
                    <img src={process.env.PUBLIC_URL + '/images/logo.jpg'}  alt="로고" />
                </LogoBox>

                <LinkGroup>
                    <div>회사소개</div>
                    <div>이용약관</div>
                    <div>개인정보처리방침</div>
                    <div>이용안내</div>
                </LinkGroup>
            </FooterNav>
            <FooterContent>
                <FooterColumn>
                    

                    <SectionTitle>쇼핑몰 기본정보</SectionTitle>
                    <InfoGroup>
                        <InfoItem>
                            <Label>상호명</Label>
                            <Text>트리니티엑스 주식회사</Text>
                        </InfoItem>
                        <InfoItem>
                            <Label>대표자명</Label>
                            <Text>황봄님</Text>
                        </InfoItem>
                        <InfoItem>
                            <Label>사업장주소</Label>
                            <Text>06238 서울 강남구 논현로79길 48-1 2층 1067호</Text>
                        </InfoItem>
                        <InfoItem>
                            <Label>대표전화</Label>
                            <Text>1533-0251</Text>
                        </InfoItem>
                        <InfoItem>
                            <Label>사업자 등록번호</Label>
                            <Text> 224-81-70421</Text>
                        </InfoItem>
                        <InfoItem>
                            <Label>통신판매업 신고번호</Label>
                            <Text> 제2025-서울강남-01324호 [사업자정보확인]</Text>
                        </InfoItem>
                        <InfoItem>
                            <Label>개인정보보호책임자</Label>
                            <Text>트리니티엑스 주식회사</Text>
                        </InfoItem>
                    </InfoGroup>
                </FooterColumn>

                <FooterColumn>
                    <SectionTitle>고객센터 정보</SectionTitle>
                    <InfoGroup>
                        <InfoItem>
                            <Label>상담/주문 전화</Label>
                            <Text>1533-0251</Text>
                        </InfoItem>
                        <InfoItem>
                            <Label>상담/주문 이메일</Label>
                            <Text>bomnalnofficial@gmail.com</Text>
                        </InfoItem>
                        <InfoItem>
                            <Label>CS운영시간</Label>
                            <Text>10:00 ~ 17:00 (MON-FRI)</Text>
                        </InfoItem>
                    </InfoGroup>
                </FooterColumn>
            </FooterContent>
</FooterTop>
 <FooterBottom>
            <FooterContent>
                <Copyright>Copyright © 봄날엔. All Rights Reserved. Hosting by Cafe24 Corp.</Copyright>
                <LinkGroup>SNS
                    <Img><img src={process.env.PUBLIC_URL + '/images/instagram_icon.png'} alt="인스타그램"/></Img>
                    <Img><img src={process.env.PUBLIC_URL + '/images/youtube_icon.png'} alt="유튜브"/></Img>
                    <Img><img src={process.env.PUBLIC_URL + '/images/kakao.png'} alt="카카오톡"/></Img>
                </LinkGroup>
            </FooterContent>
            </FooterBottom>
        </FooterWrapper>
    );
};

export default Footer;
