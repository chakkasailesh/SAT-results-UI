import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <ul>
      <NavLink to="/insert">Insert Score</NavLink>
      <NavLink to="/edit">Update Score</NavLink>
      <NavLink to="/delete">Delete Score</NavLink>
      <NavLink to="/view">View All Scores</NavLink>
      <NavLink to="/rank">Rank</NavLink>
    </ul>
  )
}

export default Header
