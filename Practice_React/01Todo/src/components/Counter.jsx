import React from "react";
import { useEffect } from "react";

const Counter = () => {
  let value = "Button pressed";
  function handleButtonPress() {
    console.log(`Button: ${value}`);
  }

  const handleLoop = () => {
    for (let i = 0; i < 5; i++) console.log(i + " ");
  };

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      console.log(i + " ");
    }
  }, []);

  return (
    <>
      <button
        className="px-2 py-1 bg-red-300 rounded-full"
        onClick={handleButtonPress}
      >
        Click Me
      </button>
      <button
        className="px-2 py-1 bg-red-300 rounded-full"
        onClick={handleLoop}
      >
        Run Loop
      </button>
    </>
  );
};

export default Counter;
