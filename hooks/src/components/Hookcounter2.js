import React,{ useState } from "react";

function Hookcounter2() {
    const initialCount = 0
    const [count,setCount] = useState(initialCount)

  return (
    <>
      Count : {count}
      <button onClick={() => setCount(initialCount)}> Reset </button>
      <button onClick={() => setCount(count + 2)}> Increment </button>
      <button onClick={() => setCount(count - 1)}> Decrement </button>
    </>
  )
}

export default Hookcounter2
