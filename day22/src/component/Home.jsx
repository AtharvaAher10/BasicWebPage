import React from 'react'
import { Outlet } from 'react-router-dom';

function Dynamic() {
  return (
    <div>
      <h1>User 1</h1>
      <h1>User 2</h1>
      <h1>User 3</h1>
      <Outlet/>
    </div>
  )
}

export default Dynamic;
