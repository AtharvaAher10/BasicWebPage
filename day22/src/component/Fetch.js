import React from 'react';

function Fetch() {

const apiGet = () =>{
  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))


}
  return (
    <div>
      <h1>My Api </h1>

      <button onClick={apiGet}> Fetch Api </button>
    </div>
  )
}

export default Fetch;


