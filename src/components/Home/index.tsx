import React from 'react'
import { Link } from 'react-router-dom'
import { StyledP } from './styles'

const Home = () => (
  <>
    <StyledP>This is home page</StyledP>
    <div><Link to="/about">About</Link></div>
    <Link to="/contact">Contact</Link>
  </>
)

export default Home
