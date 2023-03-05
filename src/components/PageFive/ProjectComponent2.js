import React from "react";
import styled from "styled-components";
import walk from "../../images/산책할개.png";
import card1 from "../../images/카드1.png";
import card2 from "../../images/카드2.png";
import card3 from "../../images/카드3.png";
import card4 from "../../images/카드4.png";
import card5 from "../../images/카드5.png";
import SlideShow from "./SlideShow";
const ProjectComponent2 = () => {
  const images = [card1, card2, card3, card4, card5];
  return (
    <FlexWrapper>
      <MainTitle>프로젝트명: 피부미용 테스트 어플</MainTitle>
      <ClassicFont>
        카메라로 찍은 얼굴 사진에 대해 피부 분석 및 그에 따른 화장품 추천을
        해주는 테스트 어플
      </ClassicFont>
      <Zigzag />
      <TitleWrapper>
        <SlideShow images={images} />
        <SubTitle>
          <SubText>인원:프론트엔드1명,백엔드1명,디자이너1명</SubText>
          <SubText>기술스택:React,Spring</SubText>
          <SubText>기간:2022.1~2022.2</SubText>
          <ClassicFont>
            <SubText>
              🧑‍💻 React-native 라이브러리를 활용 <br />
              카메라 사진을 백엔드에게 전송하여 피부를 테스트하여 점수로 나타냄
            </SubText>
            <SubText>
              🧑‍💻다양한 차트를 활용<br/> 
              사용자가 한 눈에 자신의 피부 상태를 파악할 수 있게 점수를 시각화함
            </SubText>
            <SubText>
              🧑‍💻사내 스킨케어 디바이스 원격 조작 기능 구현<br/>
               블루투스 통신을
              활용하여 어플 안에서 피부 미용 기기에 대한 조작을 할 수 있게
              구현<br></br> 미용기기의 전원 on/off,강도, 사용 시간등을 조작할 수 있게함
            </SubText>
          </ClassicFont>
          <ButtonWrapper>
          <ContentsButton href="https://github.com/eternalclash/NCORES-APPLICATION-FE">
          Github
        </ContentsButton>
        </ButtonWrapper>
        </SubTitle>
      </TitleWrapper>
      <Zigzag />


    </FlexWrapper>
  );
};

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  width: 70vw;
  height: 80vh;
  border: 3px solid white;
`;
const MainTitle = styled.div`
  font-size: 3rem;
`;
const Zigzag = styled.div`
  background-image: linear-gradient(
    45deg,
    black 25%,
    transparent 25%,
    transparent 50%,
    black 50%,
    black 75%,
    transparent 75%,
    transparent
  );
  margin: 1vh 0;
  background-size: 10px 10px;
  width: 80%;
  height: 2px;
`;
const MainImage = styled.img`
  object-fit: cover;
  width: 20vw;
  height: 60vh;
`;
const ContentsButton = styled.a`
  width: 10vw;
  height: 7vh;
  background-color: gray;
  font-size: 1.2rem;
  color: white;
  margin: 0 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: black;
  }
`;
const SubTitle = styled.div`
  margin-left: 2vw;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const SubText = styled.div`
 margin: 1vh 0;
`;
const TitleWrapper = styled.div`
  display: flex;
  margin: 1vh 0;
`;
const ButtonWrapper = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 5vh;
`;
const ClassicFont = styled.div`
  font-size: 1.1rem;
`;
export default ProjectComponent2;
