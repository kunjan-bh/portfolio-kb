import React from 'react'
import { NavLink } from 'react-router-dom'

const MyNavlink = () => {
  return (
    <div>
        <NavLink to ="/home">Home</NavLink>
        <NavLink to ="/about">About</NavLink>
        <NavLink to ="/contact">Contact</NavLink>
        <NavLink to ="/project">Project</NavLink>
        <NavLink to ="/publications">Publication</NavLink>
        <NavLink to ="/awards">Awards</NavLink>
    </div>
  )
}

export default MyNavlink