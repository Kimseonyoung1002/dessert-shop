import react from "react";
import styled from "styled-components";

const Container = styled.div`
width: 1280px;
margin: 0 auto;
`;

const Image = styled.img`
width: 100%;
display: block;
padding-top: 50px;
`;



const About = () => {
    return (
        <Container>
            <Image src={process.env.PUBLIC_URL + '/images/introduction01.jpg'}  alt="회사소개1"/>
            <Image src={process.env.PUBLIC_URL + '/images/introduction02.png'} alt="회사소개2"/>
        </Container>
    );
};

export default About;