import React from 'react'
import PropTypes from 'prop-types'

import { SectionContainer } from './Section.styled'

export default function Section({ title, children }) {
  return (
    <SectionContainer>
      <h1>{title}</h1>
      {children}
    </SectionContainer>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
