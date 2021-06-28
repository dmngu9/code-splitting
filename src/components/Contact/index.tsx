import React from 'react'
import loadable from '@loadable/component'

const Contact = loadable(() => import('./Contact'), {
  fallback: <div>Loading</div>
})

const ContactLoadable = () => (
  <Contact />
)

export default ContactLoadable

