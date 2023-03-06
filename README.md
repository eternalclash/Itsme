# CV

애니메이션이나 UI에 대한 오픈소스 라이브러리를 사용하지 않고 구현했습니다.

## 페이지 스크롤링

```jsx
const outerDivRef = useRef();
const [scrollIndex, setScrollIndex] = useState(1);
useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; 
      const pageHeight = window.innerHeight; 

      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
				.
				.
				.
      const outerDivRefCurrent = outerDivRef.current;
      outerDivRefCurrent.addEventListener("wheel", wheelHandler);
      return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
      };
   }, []);

```

useEffect Hook을 사용하여, 휠 이벤트가 발생할 때마다 실행됩니다. 이벤트 핸들러 함수인 wheelHandler 함수는 휠 이벤트 객체(e)를 매개변수로 받아서, 현재 스크롤 위치에 따라 다음 페이지로 이동하거나 이전 페이지로 돌아가는 기능을 수행합니다.

함수 내부에서는, deltaY 속성을 통해 휠 이벤트의 방향을 판별하고, outerDivRef 객체의 scrollTop 속성을 이용해 현재 스크롤 위치를 가져옵니다. 그리고 window 객체의 innerHeight 속성을 이용해 브라우저 창의 높이를 가져와서, 페이지의 높이를 계산합니다.

그리고 if-else 문을 이용해, 현재 스크롤 위치에 따라 다음 페이지로 이동하거나 이전 페이지로 돌아가도록 구현합니다. scrollTo 메서드를 이용해 outerDivRef 객체의 스크롤 위치를 변경하고, setScrollIndex 함수를 이용해 스크롤 인덱스를 업데이트합니다.

또한, preventDefault 메서드를 사용하여 기본 스크롤 이벤트를 막고, smooth behavior를 사용하여 부드러운 스크롤링 효과를 구현합니다.

```jsx
const Dot = ({ num, scrollIndex }) => {
    return (
      <div
        style={{
          width: 10,
          height: 10,
          border: "1px solid black",
          borderRadius: 999,
          backgroundColor: scrollIndex === num ? "black" : "transparent",
          transitionDuration: 1000,
          transition: "background-color 0.5s",
        }}
      ></div>
    );
  };
  
  const Dots = ({ scrollIndex }) => {
    return (
      <div style={{ position: "fixed", top: "50%", right: 100 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: 20,
            height: 100,
          }}
        >
          <Dot num={1} scrollIndex={scrollIndex}></Dot>
          <Dot num={2} scrollIndex={scrollIndex}></Dot>
          <Dot num={3} scrollIndex={scrollIndex}></Dot>
          <Dot num={4} scrollIndex={scrollIndex}></Dot>
          <Dot num={5} scrollIndex={scrollIndex}></Dot>
        </div>
      </div>
    );
  };
```

현재 페이지를 나타내는 도트(Dot)를 렌더링하는 Dots 컴포넌트입니다.

컴포넌트 내부에서는 Dot 컴포넌트를 호출하고, props로 현재 스크롤 위치를 나타내는 scrollIndex와 도트의 숫자를 나타내는 num을 전달합니다.

그리고 각 도트의 스타일을 정의하는데, 현재 스크롤 위치와 도트의 숫자가 일치하면 검정색 배경색상을 가지도록 설정합니다.

또한, 스크롤 인덱스가 변경될 때마다 0.5초의 시간이 걸리는 배경색상 전환 효과를 적용하기 위해, transition 속성을 사용합니다.

마지막으로, Dots 컴포넌트는 화면 오른쪽 상단에 고정되어, 페이지 이동 시 도트가 업데이트되도록 구현됩니다.

```jsx
<div ref={outerDivRef} className="outer">
      <Dots scrollIndex={scrollIndex} />
      <div className="inner">
      <video autoPlay muted loop className="bg-video2">
        <source src={video2} type="video/mp4" />
      </video>
        <PageOne/>
      </div>
      <div className="divider"></div>
      <div className="inner bg-white">
        <PageTwo/>
      </div>
      <div className="divider"></div>
      <div className="inner bg-black">
        <PageThree/>
      </div>
    </div>
```

이 Dots 컴포넌트와 앞서 보여준 useEffect Hook을 이용해 각 페이지를 구성합니다.

## 타이핑 애니메이션

```jsx
import React, { useState, useEffect } from "react";

function MyComponent({
  fontSize = "1em",
  color = "black",
  text = "",
  speed = 100,
}) {
  const [Text, setText] = useState("");
  const [Count, setCount] = useState(0);

  useEffect(() => {
    let typingText = text ? text : "";
    let typingSpeed = speed ? speed : 100;

    const interval = setInterval(() => {
      setText((Text) => {
        let updated = Text;
        updated = Text + typingText[Count];
        return updated;
      });
      setCount((Count) => Count + 1);
    }, typingSpeed);

    if (Count === typingText.length) clearInterval(interval);
    return () => clearInterval(interval);
  }, [Count, speed, text]);

  return <div style={{ fontSize: `${fontSize}`, color: `${color}`,margin:"10px 0px" }}>{Text}</div>;
}

const TypingText = ({ text, speed, fontSize, color, time }) => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(true);
    }, time);
  }, [time]);

  return (
    <div>
      {showComponent && (
        <MyComponent
          text={text}
          fontSize={fontSize}
          color={color}
          speed={speed}
        />
      )}
    </div>
  );
};

export default TypingText;
```

주어진 텍스트를 일정한 속도로 타이핑하는 TypingText 컴포넌트와 이를 구현하기 위한 MyComponent 컴포넌트를 구현한 코드입니다.

MyComponent 컴포넌트는 useState Hook을 사용하여, 현재 타이핑되고 있는 텍스트(Text)와 타이핑이 진행되는 위치(Count)를 상태값으로 관리합니다. 또한, useEffect Hook을 사용하여, 컴포넌트가 마운트 또는 상태값이 변경될 때마다, 일정한 속도로 텍스트를 타이핑하는 기능을 구현합니다.

컴포넌트 내부에서는 setInterval 메서드를 사용하여, 일정한 간격으로 setText과 setCount 함수를 호출합니다. setText 함수는 현재 타이핑되는 텍스트(Text)에 새로운 글자를 추가하는 역할을 하고, setCount 함수는 타이핑이 진행되는 위치(Count)를 업데이트합니다. 이를 통해, 전체 텍스트가 타이핑되기까지의 진행 상황을 나타낼 수 있습니다.

또한, 컴포넌트가 언마운트될 때 clearInterval 메서드를 사용하여, setInterval 메서드로 등록된 타이머를 해제합니다. 이를 통해, 불필요한 리소스 소비를 방지합니다.

TypingText 컴포넌트는 MyComponent 컴포넌트를 호출하고, props로 텍스트, 타이핑 속도, 폰트 크기, 색상 등을 전달합니다. 또한, useEffect Hook을 사용하여, 컴포넌트가 마운트된 후 일정 시간이 지난 후에 MyComponent 컴포넌트를 보여주도록 구현합니다.

마지막으로, 컴포넌트에서는 JSX를 사용하여, 텍스트가 타이핑되는 동안 화면에 텍스트를 보여주고, 타이핑이 완료되면 화면에서 텍스트를 사라지게 구현됩니다.

## Fade In&Out 애니메이션

```jsx
const AnimatedText = ({ text,time,fontSize="1.2rem",textAlign="",color="black",margin="" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleAnimationEnd = () => {
    setIsVisible(!isVisible);
  };
  useEffect(() => {
    const handleWheel = () => {
      setTimeout(() => {
        setIsVisible(true);
      }, time);
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);
  return (
    <div style={{textAlign:`${textAlign}`,margin:`${margin}`}}className="animated-text">
      <span
        style={{fontSize:`${fontSize}`,color:`${color}`}}
        className={`text ${isVisible ? "visible" : ""}`}
        onAnimationEnd={handleAnimationEnd}
      >
        {text}
      </span>
    </div>
  );
};
export default AnimatedText
```

주어진 텍스트를 스크롤 이벤트가 발생하면 일정 시간 후에 애니메이션 효과와 함께 보여주는 AnimatedText 컴포넌트를 구현한 코드입니다.

컴포넌트 내부에서는 useState Hook을 사용하여, 텍스트가 보여지는 상태(isVisible)를 상태값으로 관리합니다. 또한, useEffect Hook을 사용하여, 스크롤 이벤트가 발생하면 일정 시간이 지난 후에 isVisible 상태값을 변경하여 애니메이션 효과와 함께 텍스트를 보여주는 기능을 구현합니다.

useEffect Hook 내부에서는, 스크롤 이벤트가 발생하면 handleWheel 함수를 호출합니다. handleWheel 함수 내부에서는 setTimeout 메서드를 사용하여, 일정 시간이 지난 후에 isVisible 상태값을 변경합니다. 이를 통해, 스크롤 이벤트가 발생하면 일정 시간 후에 애니메이션 효과와 함께 텍스트가 보여집니다.

또한, 컴포넌트에서는 handleAnimationEnd 함수를 사용하여, 애니메이션이 종료되면 isVisible 상태값을 반전시킵니다. 이를 통해, 애니메이션이 끝나면 텍스트가 보이지 않게 됩니다.

마지막으로, 컴포넌트에서는 JSX를 사용하여, 텍스트가 애니메이션 효과와 함께 보여지고, 폰트 크기, 정렬, 색상, 여백 등을 설정할 수 있습니다.

## 크기 확장 애니메이션

```jsx
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
```

컴포넌트 내부에서는 useState Hook을 사용하여, 휠 이벤트가 발생하면 컨텐츠를 확대하는 애니메이션을 실행하기 위한 isWheel 상태값을 관리합니다. 또한, useEffect Hook을 사용하여, 휠 이벤트가 발생하면 애니메이션을 실행하고, 애니메이션이 종료되면 isWheel 상태값을 초기화하는 기능을 구현합니다.

또한, 컴포넌트에서는 JSX를 사용하여, 제목과 내용을 포함하는 컨텐츠를 구현합니다. 이를 위해, WrapperContainer, TiltedDivContainer, RotatingBoxContainer, RotatingBoxContent, ExplainText 등의 스타일을 정의합니다.

마지막으로, 컴포넌트에서는 content 배열을 map 메서드를 사용하여, 내용을 나타내는 ExplainText 컴포넌트를 반복적으로 렌더링합니다. 이를 통해, ShrinkBox 컴포넌트는 제목과 내용이 포함된 컨텐츠를 확대하는 애니메이션 효과와 함께 구현됩니다.

## 슬라이드 컴포넌트

```jsx
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
```

useState Hook을 사용하여, 현재 활성화된 탭 인덱스를 관리하는 activeIndex 상태값을 설정합니다. 또한, handlePrevClick과 handleNextClick 함수를 정의하여, 이전 탭과 다음 탭으로 이동하는 기능을 구현합니다. 이때, 배열 인덱스가 0보다 작아지면 마지막 탭으로 이동하고, 배열 인덱스가 배열의 길이를 초과하면 첫 번째 탭으로 이동합니다.

컴포넌트에서는 JSX를 사용하여, 이전 탭과 다음 탭으로 이동할 수 있는 화살표 아이콘과, 현재 활성화된 탭 컴포넌트를 출력합니다. 이를 위해, SliderWrapper 스타일을 정의하여 컴포넌트를 감싸고, 화살표 아이콘을 클릭했을 때 이벤트를 처리할 수 있도록 onClick 핸들러를 등록합니다.

마지막으로, TabComponent는 components 배열의 activeIndex 번째 원소를 출력하여, 탭 형식의 컴포넌트를 구현합니다. 이를 통해, TabComponent는 여러 개의 컴포넌트를 간편하게 전환할 수 있는 탭 기능을 제공합니다.