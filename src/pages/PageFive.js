import React from "react";
import styled from "styled-components";
import ProjectComponent from "../components/PageFive/ProjectComponent";
import ProjectComponent2 from "../components/PageFive/ProjectComponent2";
import TabComponent from "../components/PageFive/TabComponent";
import AnimatedText from "../components/PageTwo/AnimatedText";
const PageFive = () => {
  return (
    <FlexWrapper>
      <AnimatedText
        text="Project"
        fontSize="5rem"
        color="white"
        textAlign="center"
        margin="5vh 0 3ch 0"
      />
      <TabComponent
        components={[
          <ProjectComponent/>,
          <ProjectComponent2/>
        ]}
      />
    </FlexWrapper>
  );
};
const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
`;
export default PageFive;
