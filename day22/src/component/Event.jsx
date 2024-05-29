import React from 'react';

function Event() {

    function handleClick(){
        console.log("you clicked onClick Event");
    }

    function handleMouse(){
        console.log("you go on onMouseOver");
    }

    function handlePassword(){
        console.log("you entered password")
    }

    function handleSubmit(){
        console.log("submitted sucessfully");
    }

    

  return (
    <div>
      <button  onClick={handleClick}>Click ME !</button>
      <input type='text' onMouseOver={handleMouse}></input>
      <input type='password' onInput={handlePassword}></input>
      <button type="submit" onSubmit={handleSubmit}></button> 

    </div>
  )
}

export default Event;