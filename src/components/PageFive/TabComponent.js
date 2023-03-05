import React, { useState } from "react";
import styled from "styled-components";
import {TfiArrowCircleLeft,TfiArrowCircleRight} from 'react-icons/tfi'
function TabComponent({ components }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => prevIndex === 0 ? components.length - 1 : prevIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => prevIndex === components.length - 1 ? 0 : prevIndex + 1);
  };

  return (
    <SliderWrapper>
        <div onClick={handlePrevClick} style={{marginRight:"3vh",cursor:"pointer"}}><TfiArrowCircleLeft color="white" size="4vw"/></div>
        {components[activeIndex]}
        <div onClick={handleNextClick} style={{marginLeft:"3vh",cursor:"pointer"}}><TfiArrowCircleRight color="white" size="4vw"/></div>
      </SliderWrapper>

  );
}
const SliderWrapper = styled.div`
 width:100%;
 display:flex;
 justify-content: center;
 align-items: center;
`

export default TabComponent;
