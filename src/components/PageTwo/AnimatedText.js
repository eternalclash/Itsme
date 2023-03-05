import React, { useState,useLayoutEffect,useEffect } from "react";
import "../../styles.css";

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