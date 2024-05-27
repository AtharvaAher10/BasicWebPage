import { useRef, useState } from "react";

function UseRef1() {
  const refElement = useRef(""); // calling useref
  const [name1, setName] = useState("atharva");
  console.log(refElement);

  function Reset() {
    setName("");
    refElement.current.focus(); // using ref we can adding functionality to dom.
    console.log(Reset);
  }

  function handleInput() {
    refElement.current.style.color = "blue";
    refElement.current.value = "aher";
    console.log(handleInput);
  }

  return (
    <>
      <h1> Learning useRef </h1>
      <input
        ref={refElement}
        type="text"
        value={name1}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={Reset}> Reset </button>
      <button onClick={handleInput}>HandleInput</button>
    </>
  );
}

export default UseRef1;
