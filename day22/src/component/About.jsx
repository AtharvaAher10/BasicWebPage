import React from "react";
import { Link } from "react-router-dom";

function About() {
  console.log("This Is About Page !");
  return (
    <>
      <div>
        <h1>ABOUT</h1>
        <p> 1. History </p>
        <p> 2. Student Support Facility </p>
        <p> 3. Campus Map </p>
      </div>
      <Link to="/">
        <h2>HOME</h2>
      </Link>
      <br />
      <br />
      <Link to="/contact">
        <h2>CONTACT US</h2>
      </Link>
    </>
  );
}

export default About;
