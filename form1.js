function myFunction(e) {
  e.preventDefault();
  let fname = document.getElementById("f1").value;
  let lname = document.getElementById("l1").value;
  let email = document.getElementById("eml").value;
  let Address = document.getElementById("adr").value;

  console.log(fname);
  console.log(lname);
  console.log(email);
  console.log(Address);
}
