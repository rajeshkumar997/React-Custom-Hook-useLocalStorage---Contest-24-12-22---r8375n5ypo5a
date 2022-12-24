import { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = (stateVar, value) => {
  const[currState, setState]= useState(value);
  updateStorage(stateVar, curState);
  return[curState, setState];
};
const updateStorage = (key, val) =>{
  localStorage.setItem(key,val);
}

export default useLocalStorage;
