import React from "react";

function ListKeys() {

  // const list2 = ["india", "america", "england", "india"];
  // const res = list2.map((item1, index) => <li type="1" key={index}> {item1}</li>);

  // return (
  // <div>
  //   <h1> The List Of The Countries Is : </h1>
  //   {res}

  // </div>
  // );


  const List1 = [
    { id: 1, name: "India" },
    { id: 2, name: "England" },
    { id: 3, name: "NewZeland" },
    { id: 4, name: "India" },
  ];

  const result = List1.map((item) => <li key={item.id}>{item.name}</li>);

  return <div>{result}</div>;


}

export default ListKeys;
