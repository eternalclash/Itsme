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
            <ShrinkBox title="HTML/CSS" content={["웹표준을 지키려 노력합니다.","styled-compontent과 같은 Css in Js문법에 익숙합니다.","크로스 브라우징에 대응할 수 있습니다.","keyframe을 활용한 애니메이션 기법을 활용할 수 있습니다."]}/>
            <ShrinkBox title="JAVASCRIPT" content={["ES6+문법에 익숙합니다.","webpack,barbel등의 번들러 사용 경험이 있습니다.","typescript를 사용할 수 있습니다.","디자인 시스템과 atomic 디자인을 사용할 수 있습니다."]}/>
            </FlexWrapper>
            <FlexWrapper>
            <ShrinkBox title="REACT" content={["redux,recoil 등의 상태관리 라이브러리 사용한 경험이 있습니다.","컴포넌트 렌더링 최적화에 대해 중요시 여깁니다.","React-Native를 사용해본 경험이 있습니다."]}/>
            <ShrinkBox title="PYTHON" content={["Pytorch나 KonlPy 같은 Python 오픈 소스 라이브러리를 사용한 경험이 있습니다","기본적인 알고리즘 구현 및 코딩 테스트를 할 때 사용할 수 있습니다."]}/>
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