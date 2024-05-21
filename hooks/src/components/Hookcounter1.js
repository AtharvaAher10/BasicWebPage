import React, {useState} from 'react'

function Hookcounter() {
  //      current  | func       |
  //       state   | that u     |  initial
  //       value   | update     |  val of
  //               | state      |  state
    const [count,    setCount] =  useState(0)

  return (
    <>
      <button onClick={() =>setCount(count+1)}> Count{count}</button>
    </>
  )
}

export default Hookcounter;
