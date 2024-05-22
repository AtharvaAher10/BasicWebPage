import logo from "./logo.svg";
import "./App.css";
import Hookcounter1 from "./components/Hookcounter1";
import Hookcounter2 from "./components/Hookcounter2";
import Hook3 from "./components/Hook3";
import Child11 from "./Child11";
import React, { createContext } from "react";
import { useEffect, useState, useCallback } from "react";
import { useRef } from "react";
import UseRef1 from "./components/UseRef1";
import UseReducer from "./components/UseReducer";
import SimpleAdd from "./components/SimpleAdd";


const data = createContext();
const data1 = createContext();

function App() {
  const name = "atharva";
  const gender = "male";

  return (
    <>
      <Hookcounter1 />
      <Hookcounter2 />
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <Hook3 />
          <Child11 />
        </data1.Provider>
      </data.Provider>
      <UseRef1 />
      <UseReducer/>
      <SimpleAdd/>
    </>
  );
}

export default App;
export { data, data1 };
