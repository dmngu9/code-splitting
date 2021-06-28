import React from 'react'
import { Link } from 'react-router-dom'
import { StyledP } from './styles'

const Contact = () => (
  <>
    <StyledP>This is contact page. You can see this code on my Github</StyledP>
    <div><Link to="/">Home</Link></div>
    <Link to="/about">About</Link>
  </>
)

export default Contact
