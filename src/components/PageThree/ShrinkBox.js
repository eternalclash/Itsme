import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';


const ShrinkBox = ({title,content=[]}) => {
  const [isWheel, setIsWheel] = useState(false);

  useEffect(() => {
    const handleWheel = () => {
      setIsWheel(true);
    };

    const handleWheelEnd = () => {
      setIsWheel(false);
    };

    document.addEventListener('wheel', handleWheel);
    document.addEventListener('animationend', handleWheelEnd);

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('animationend', handleWheelEnd);
    };
  }, []);

  return (
    <WrapperContainer  isWheel={isWheel}>
      <TiltedDivContainer>{title}</TiltedDivContainer>
      <RotatingBoxContainer>
        <RotatingBoxContent>{content.map((e,idx)=>{
          return <ExplainText>
            {e}
          </ExplainText>
        })}</RotatingBoxContent>
      </RotatingBoxContainer>
    </WrapperContainer>
  );
};
const rotate = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const shrinkAnimation = css`
  animation: ${rotate} 2.5s ease-in-out;
`;

const WrapperContainer = styled.div`
  width: 40%;
  position: relative;
  ${({ isWheel }) => (isWheel ? shrinkAnimation : null)};
`;

const RotatingBoxContainer = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RotatingBoxContent = styled.div`
  width: 90%;
  height: 35vh;
  background-color: none;
  color:white;
  border :5px solid blue;
  font-size: 1.3rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;

`;
const ExplainText = styled.div`
  margin: 1vh 1vh;
`
const TiltedDivContainer = styled.div`
  width: 130px;
  height: 50px;
  font-size:20px;
  background-color: none;
  border:3px solid green;
  color:white;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-30deg);
  position: absolute;
  z-index: 99;
  top: -20px;
  left: 0;
`;

export default ShrinkBox;