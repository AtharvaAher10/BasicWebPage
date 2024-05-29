import { useState } from "react";



function Form1() {

    const [name , setName] = useState("");
    const [address , setAddress] = useState("");
    const [email , setEmail] = useState("");
    const [education , setEducation] = useState("");
    const [company , setCompany] = useState("");

    function getData(e){
        console.log("Name:" , name);
        console.log("Email:" , email);
        console.log("Education:" , education);
        console.log("Address:" , address);
        console.log("Company:" , company);
        e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={getData}>
        <h1> Student Registration Form </h1>
        <label> Name </label>
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
        <br />
        <label> Address </label>
        <input type="text" onChange={(e) => setAddress(e.target.value)}></input>
        <br />
        <label> Email </label>
        <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
        <br />
        <label> Education </label>
        <input type="text" onChange={(e) => setEducation(e.target.value)}></input>
        <br />
        <label> Company Name </label>
        <input type="text" onChange={(e) => setCompany(e.target.value)}></input>
        <br />
        <br />
        <button type="submit" onSubmit={getData}>Submit</button>
      </form>
    </div>
  )
}

export default Form1;


