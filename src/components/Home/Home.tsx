import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import loadable from '@loadable/component'
import { StyledP } from './styles'

const IntroLoadable = loadable(() => import('components/Intro'), {
  fallback: <div>Loading</div>
})

const Home = () => {
  const [showIntro, setShowIntro] = useState(false)

  return (
    <>
      <StyledP>This is home page</StyledP>
      <div><Link to="/about">About</Link></div>
      <Link to="/contact">Contact</Link>
      <div>
        <button onClick={() => setShowIntro(true)} onMouseOver={() => IntroLoadable.preload()}>Click me</button>
        {showIntro && <IntroLoadable />}
      </div>
    </>
  )
}



export default Home
