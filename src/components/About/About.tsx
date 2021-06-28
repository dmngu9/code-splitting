import React from 'react'
import { Link } from 'react-router-dom'
import { StyledP } from './styles'

const About = () => (
  <>
    <StyledP>This is about page. I will introduce code splitting to you</StyledP>
    <div><Link to="/">Home</Link></div>
    <Link to="/contact">Contact</Link>
  </>
)

export default About
