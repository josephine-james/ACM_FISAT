import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import BackGround from "../../assets/svg/layered-steps-haikei.svg";
import HeaderImage from "../../assets/img/ACM_FISAT.png";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";

export default function Header() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter" style={{ backgroundImage: `url(${BackGround})` }}>
      <LeftSide className="flexLeft">
        <div>
          <h1 className="extraBold font60" style={{ color: " #0B093B" }}>Association for Computing Machinery</h1>
          <br/>
          <h1 className="bold font30" style={{ color: " #0B093B" }}>FISAT Student Chapter</h1>
          <br/>
          <HeaderP className="font20 " style={{ color: " #0B093B" }}>
          ACM aims to bring together computing educators, researchers, and professionals to inspire dialogue, share resources, and address this field's challenges. ACM Students Chapter FISAT is the biggest Computer Science Students Chapter in FISAT.
          </HeaderP>
         {/* <BtnWrapper>
            <FullButton title="Get Started" />
          </BtnWrapper>
  */}
        </div>
      </LeftSide>
      <RightSide>
       <ImageWrapper>
          <Img className="radius10" src={HeaderImage} alt="office" style={{ zIndex: 9}} />
            {/*<QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.</em>
              </p>
              <p className="font13 orangeColor textRight" style={{marginTop: '10px'}}>Ralph Waldo Emerson</p>
            </div>
          </QuoteWrapper>
         <DotsWrapper>
            <Dots />
          </DotsWrapper>
          */}
        </ImageWrapper>
       {/* <GreyDiv className="lightBg"></GreyDiv>*/}
      </RightSide>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  margin-top: 0px;
  padding : 50px;
  margin-bottom: 0px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 10%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 700px;
  padding: 0px 0 0px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: auto;
    height: 100%;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;


