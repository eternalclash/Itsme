import React from "react";
import styled from "styled-components";
import walk from "../../images/산책할개.png";
const ProjectComponent = () => {
  return (
    <FlexWrapper>
      <MainTitle>프로젝트명: 산책할개</MainTitle>
      <ClassicFont>
        강아지와 같이 산책할 강아지를 매칭해주고 산책로를 추천해주는 서비스
      </ClassicFont>
      <Zigzag />
      <TitleWrapper>
        <div>
          <MainImage src={walk} alt=""></MainImage>
        </div>
        <SubTitle>
          <SubText>인원:프론트엔드3명,백엔드3명,디자이너2명</SubText>
          <SubText>기술스택:React,Node.JS</SubText>
          <SubText>기간:2021.10~2021.12</SubText>
        </SubTitle>
      </TitleWrapper>
      <Zigzag />
      <ClassicFont>
        <div>
          🧑‍💻 프로젝트 팀장으로 프로젝트의 지속적인 방향성에 대한 꾸준한 고민과
          의견 수렴 및 팀원과의 협업 시 생기는 갈등 중재
        </div>
        <div>🧑‍💻카카오 API를 통한 사용자 중심의 산책로 UI/UX 구현</div>
        <div>🧑‍💻웹 소켓을 통한 Push알림 구현</div>
        <div>
          🧑‍💻 산책 등록, 수정 및 삭제 등 REST API를 통한 CRUD 구현 및 불필요한
          서버 통신 최적화{" "}
        </div>
        <div>🧑‍💻Lazy Loading을 통한 초기 로딩 속도 개선</div>
        <div>
          🧑‍💻Sentry를 통한 에러로깅 및 유저 피드백을 통한 에러문제 원인 분석 및
          해결
        </div>
      </ClassicFont>
      <ButtonWrapper>
        <ContentsButton href="https://github.com/O-K-O-K-O-K/Front-end">
          Github
        </ContentsButton>
        <ContentsButton href="https://www.youtube.com/watch?v=dKcawThqUME&t=16s">
          Youtube
        </ContentsButton>
      </ButtonWrapper>
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
  font-size: 4rem;
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
  width: 17vw;
  height: 20vh;
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
 margin-top: 3vh;
 display: flex;
`
const ClassicFont = styled.div`
  font-size: 1.1rem;
`;
export default ProjectComponent;
