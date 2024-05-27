import React, { useContext } from 'react'
import {data,data1} from './App'

function Child11() {
    const Fname = useContext(data);
    const gender = useContext(data1);
  return (
    <>
    <h1> My name is {Fname} and Gender is {gender}</h1>
    </>
  )
}


export default Child11;
