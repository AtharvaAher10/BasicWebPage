import React from 'react'
import { Link } from 'react-router-dom';

function Contact(){
    console.log("This Is Contact Page !");
  return (
    <>
            
        <h1> CONTACT </h1>
        <p> Contact No : 020 7153 3633</p>
      <Link to="/about"><h2>ABOUT</h2></Link><br/><br/>
      <Link to="/" ><h2>HOME</h2></Link> 
    </>
  );
}

export default Contact;
