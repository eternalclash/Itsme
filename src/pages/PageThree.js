import React from 'react';
import styled from 'styled-components';
import ShrinkBox from '../components/PageThree/ShrinkBox';
import AnimatedText from '../components/PageTwo/AnimatedText';
const PageThree = () => {
    return (
        <Wrapper>
            <AnimatedText text="Strength" fontSize="5rem" textAlign="center" color='white'/>
            <Margin/>
            <FlexWrapper>
            <ShrinkBox/>
            <ShrinkBox/>
            </FlexWrapper>
            <FlexWrapper>
            <ShrinkBox/>
            <ShrinkBox/>
            </FlexWrapper>
        </Wrapper>
    );
};
const Wrapper = styled.div`
 width:100%;
 height:100vh;
 display:flex;
 flex-direction: column;
 justify-content: center;
 align-items: center ;
`
const Margin = styled.div`
margin-top:2vh;
`
const FlexWrapper = styled.div`
 width:100%;
 display:flex;
 margin:2vh 0 ;
 justify-content: center;
 align-items: center ;
`
export default PageThree;