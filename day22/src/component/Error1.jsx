import React from 'react'

function Error1() {

  try{
    let age = prompt("enter your age")
    age = Number.parseInt(age);
    if(age > 150)
      throw new ReferenceError("this is probably not true")
  }

  catch(error){
    console.log(error.name);
  }

  console.log("the script is still running");
  return (
    <div>
      
    </div>
  )
}

export default Error1;