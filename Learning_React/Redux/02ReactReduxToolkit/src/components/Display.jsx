import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
  const {counterValue} = useSelector((store) => store.counter);

  return <div className="mt-5">Current counter value : {counterValue}</div>;
};

export default Display;
