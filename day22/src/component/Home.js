import React from 'react';
import { Link } from 'react-router-dom';

function Fetch() {
const apiGet = () =>{
  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))


}
  return (
    <div>
      <h1> HOME </h1>
      <h3> SPPU University. </h3>
      <p> 1. Addmission</p>
      <p> 2. Examination</p>
      <p> 3. Research</p>
      <button onClick={apiGet}> SUBMIT </button>
      <Link to="/about"><h2>ABOUT</h2></Link><br/>
      <Link to="/contact"><h2>CONTACT US</h2></Link><br/>

      
    </div>
  )
}

export default Fetch;


