import React from 'react'
import { useParams } from 'react-router-dom'

function Userprofile() {
    const { id } = useParams()
  return (
    <div>
      <h2> User Profile</h2>
      <p> USER ID : {id}</p>
    </div>
  )
}

export default Userprofile
