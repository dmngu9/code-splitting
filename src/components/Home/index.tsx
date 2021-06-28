import React from 'react'
import loadable from '@loadable/component'

const Home = loadable(() => import('./Home'), {
  fallback: <div>Loading</div>
})

const HomeLoadable = () => <Home />

export default HomeLoadable

