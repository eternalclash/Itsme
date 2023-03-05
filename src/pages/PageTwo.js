import React, { useEffect,useState } from 'react';
import EllipseImage from '../components/PageOne/ELlipseImage';
import me from '../images/me2.jpeg'
import styled from 'styled-components'
import AnimatedText from '../components/PageTwo/AnimatedText';
const PageTwo = () => {

    return (
        <FlexWrapper>
             <AnimatedText text = "WHO AM I" time={500} fontSize="5rem" textAlign="center"/>
             <ImageWrapper>
             <EllipseImage time={500} src={me} width={300} height={300}/>
             <TextWrapper>
             <AnimatedText time= {500} text="Frontend를 깊이 있게 다져나가고자 하는 주니어 개발자입니다." speed={60} fontSize="1.2rem" color="green" />
             <AnimatedText time = {500} text="Backend에도 관심을 가지는 등, 분야를 가리지 않고 적극적으로 개발에 대한 관심사를 넓혀나가고 있습니다. " speed={60} fontSize="1.2rem" color="green" />                
             <br/>
             <AnimatedText time = {500} text="[중요한 건 꺾이지 않는 마음]" speed={60} fontSize="1.2rem" color="black" />
             <AnimatedText time = {500} text="이 말처럼 포기하지 않고 차분하게 나아가는 것이 중요하다고 생각합니다" speed={60} fontSize="1.2rem" color="green" />
             <AnimatedText time = {500} text="스스로에게 새로운 과제를 내어주며 계속해서 발전해 나가는 개발자가 되고 싶습니다." speed={60} fontSize="1.2rem" color="green" />
            </TextWrapper>
             </ImageWrapper>
        <AnimatedText text = "CONTENTS" time = {500} fontSize="3rem" textAlign="center" />
        <ContentsWrapper>
        <ContentsButton href='https://github.com/eternalclash'>Github</ContentsButton>
        <ContentsButton href='https://velog.io/@refindmysapporo'>Blog</ContentsButton>
        <ContentsButton href='mailto:"suchasucha@naver.com'>suchasucha@naver.com</ContentsButton>
        </ContentsWrapper>




        </FlexWrapper>
    );
};
const FlexWrapper = styled.div`
  display:flex;
  width:100%;
  height:100%;
  flex-direction:column;
  align-content: center;
  margin-top:10vh;
  
`
const ImageWrapper = styled.div`
  padding:10px;
  margin-top:3vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom:5vh
`
const ContentsWrapper = styled.div`
  display:flex;
  justify-content: center;
  width:100%;
  margin-top:5vh;
`
const ContentsButton = styled.a`
  width:15rem;
  height:7vh;
  background-color: gray;
  font-size: 1.2rem;
  color:white;
  margin: 0 5rem;
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius:15px;
  cursor:pointer;
  text-decoration:none;
  &:hover{
   background-color:black;
  }
`
const TextWrapper = styled.div`

 display:flex;
 margin-left:5rem;
 flex-direction: column;
`
export default PageTwo;