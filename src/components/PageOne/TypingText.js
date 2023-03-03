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
