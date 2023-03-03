import React, { useEffect,useState } from "react";
import styled from 'styled-components'
const EllipseImage = ({ src, alt, width, height,time }) => {
const [isVisible, setIsVisible] = useState(false);
useEffect(()=>{
   const handleWheel = () => {
    setTimeout(()=>{
     setIsVisible(true)
    },time)
   }
   window.addEventListener("wheel", handleWheel);
   return () => window.removeEventListener("wheel", handleWheel);
},)
  const style = {
    borderRadius: "25%",
    width: `${width}px`,
    height: `${height}px`,
    objectFit: "cover",
  };

  return (
    <WrapperHover>
  <img className={`text ${isVisible ? "visible" : ""}`} src={src} alt={alt} style={style} />
    <Content>이수창<br></br>1997.09.17<br></br>상명대학교 컴퓨터과학과 졸업(2023.02.18)</Content>
  </WrapperHover>
  )

};

export default EllipseImage;

const Wrapper = styled.div`
  position:relative;
`
const Content = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 8px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  z-index: 1;
`
const WrapperHover = styled(Wrapper)`
  &:hover ${Content} {
    display: block;
  }
`;