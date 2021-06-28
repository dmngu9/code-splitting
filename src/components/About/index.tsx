import React from 'react'
import loadable from '@loadable/component'

const About = loadable(() => import('./About'), {
  fallback: <div>Loading</div>
})

const AboutLoadable = () => (
  <About />
)

export default AboutLoadable

