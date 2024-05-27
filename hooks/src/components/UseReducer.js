import React from 'react';
import { useReducer } from 'react';

const initialstate = 0;
const reducer = (state,action) => {
    switch(action){
        case "increment":
            return state +1;
        case "decrement":
            return state -1;
        default:
            return state;
    }
}

function UseReducer() {
    const [count,dispatch] = useReducer(reducer,initialstate)
  return (
    <div>
        <div>count = {count} </div>
      <button onClick={() => dispatch("increment")}> Increment</button>
      <button onClick={()=>dispatch("decrement")}> Decrement</button>
    </div>
  )
}

export default UseReducer;
