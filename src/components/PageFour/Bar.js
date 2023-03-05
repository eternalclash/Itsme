import React, { useState, useEffect } from "react";
import {ImArrowRight} from 'react-icons/im'
const Bar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    let intervalId;

    const handleWheel = () => {
      clearInterval(intervalId);
      setTimeout(() => {
        intervalId = setInterval(() => {
          setWidth((prevHeight) => prevHeight + 10);
        }, 50);
      }, 3000);
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      style={{
        top: "40vh",
        position: "absolute",
        left: "",
        width: width > window.innerWidth ? window.innerWidth : width,
        height: "6vh",
        background: "red",
        transform: "rotate(-20deg)",
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-end"
      }}
    >
      <ImArrowRight color="white" size={40}/>
    </div>
  );
};

export default Bar;
