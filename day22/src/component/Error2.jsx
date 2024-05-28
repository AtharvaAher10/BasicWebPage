import React from 'react'

function Error2() {
    setTimeout(() => {
        console.log(" loading ......  Please wait")
    } , 1000)


    function new1(){
    try {
        console.log(" error handling ");
    } 
    catch (er) {
        console.error(er);
    }
    finally{
        console.log("This is Final")
    }
}
    

    setTimeout(() => {
        console.log(" loaded ......  Checkout")
    } , 2000)

    setTimeout(() => {
        console.log(" working ......  enjoy")
    } , 3000)

  return (
    <div>
      <button onClick={new1}> Click </button>
    </div>
  )
}

export default Error2;
