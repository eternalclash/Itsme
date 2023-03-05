import React from "react";
import Arrow from "../components/PageFour/Arrow";
import styled from "styled-components";
import Bar from "../components/PageFour/Bar";
import AnimatedText from "../components/PageTwo/AnimatedText";
const PageFour = () => {
  return (
    <FlexWrapper>
      <AnimatedText
        textAlign="center"
        text="CAREER"
        color="white"
        fontSize="5rem"
        margin="5vh 0 0 0"
      />
      <Bar />
      <Text1>상명대학교 수학교육과 입학(2017.02)</Text1>
      <Text2>컴퓨터과학과 전과(2020.08)</Text2>
      <Text3>항해99 3기 수료(2021.09~2021.12)</Text3>
      <Text4>NCORES(주) 프론트엔드 인턴(2022.01~2022.02)</Text4>
      <Text5>원티드 프론트엔드 온보딩 인턴쉽 8기 수료(2023.01)</Text5>
      <Text6>상명대학교 컴퓨터과학과 졸업(2023.02)</Text6>
    </FlexWrapper>
  );
};
const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  position: relative;
`;
//26vh부터
const Text1 = styled.div`
  position: absolute;
  font-size: 1.2rem;
  color: white;
  left: 5%;
  top: 73vh;
`;
const Text2 = styled.div`
  position: absolute;
  font-size: 1.2rem;
  color: white;
  top: 65vh;
  left: 19%;
`;
const Text3 = styled.div`
  position: absolute;
  font-size: 1.2rem;
  color: white;
  top: 57vh;
  left: 33%;
`;
const Text4 = styled.div`
  position: absolute;
  font-size: 1.2rem;
  color: white;
  top: 50vh;
  left: 45%;
`;
const Text5 = styled.div`
  position: absolute;
  font-size: 1.2rem;
  color: white;
  top: 42vh;
  left: 60%;
`;
const Text6 = styled.div`
  position: absolute;
  font-size: 1.2rem;
  color: white;
  top: 33vh;
  left: 74%;
`;

export default PageFour;
