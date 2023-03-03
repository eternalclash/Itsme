import React from "react";
import EllipseImage from "../components/PageOne/ELlipseImage";
import TypingText from "../components/PageOne/TypingText";
import me from "../images/me2.jpeg";
import styled from "styled-components";
const PageOne = () => {
  return (
    <FlexWrapper>
      <TypingText
        time={500}
        text="안녕하세요!"
        speed={60}
        fontSize="8rem"
        color="white"
      />
      <TypingText
        time={1500}
        text="프론트엔드 개발자"
        speed={60}
        fontSize="8rem"
        color="white"
      />
      <TypingText
        time={2500}
        text="이수창입니다."
        speed={60}
        fontSize="8rem"
        color="white"
      />
    </FlexWrapper>
  );
};
const FlexWrapper = styled.div`
  margin-top:30px;
  margin-left:30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  
`;
const TextWrapper = styled.div`
  width: 500px;
  height: 50%;
  display: flex;
  margin-left: 50px;
  justify-content: center;
  flex-direction: column;
`;
export default PageOne;
