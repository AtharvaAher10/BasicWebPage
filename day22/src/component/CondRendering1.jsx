import React, { useState } from "react";
function CondRendering1() {
  const [isAgeValid, setAge] = useState(true);

  // simple if else condition method
  if(isAgeValid){
    return (
      <div>
        You can vote
      </div>
    )
  }
    else{
      return (
          <div>
            You cannot  vote
          </div>
        )
    }
  }

  // using element variable method

  // let age;
  // if(isAgeValid){
  //   age = <div> You Can Vote !</div>
  // }
  // else{
  //   age = <div> You cannot Vote !</div>
  // }
  // return(
  //   <div>{age}</div>
  // )

  // using ternory operator

  // return (
  //   <>
  //     {isAgeValid ? (
  //       <button> You can Vote</button>
  //     ) : (
  //       <button>You Cannot Vote</button>
  //     )}
  //   </>
  // );

  // using short circuit operator

  // return( // it can only execute where the value is true.
  //   <>
  //   {isAgeValid && <div> You can Vote !</div>}
  //   </>
  // )


export default CondRendering1;
