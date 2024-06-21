import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
  const counter = useSelector((store) => store.counter);

  return <div className="mt-5">Current counter value : {counter}</div>;
};

export default Display;
