import { act } from "react";
import {configureStore} from "@reduxjs/toolkit"

const INITIAL_VALUE = {
  counter: 0,
  privacy : false
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return { counter: store.counter + 1, privacy: store.privacy};
  } else if (action.type === "DECREMENT") {
    return { counter: store.counter - 1, privacy: store.privacy};
  } else if(action.type === "ADD"){
    return {
      counter: store.counter + Number(action.payload.num), privacy: store.privacy};
  } else if(action.type === "SUBTRACT"){
    return {
      counter: store.counter - Number(action.payload.num), privacy: store.privacy};
  } else if(action.type === "TOGGLE"){
    return {counter: store.counter, privacy: !store.privacy }
  }
  return store;
};

const counterStore = configureStore(counterReducer);

export default counterStore;
