import React from 'react'
import { CardContainer } from './styles'


const Card = ({ width, height, padding, margin, children }) => {
  return (
    <CardContainer
      width={width}
      height={height}
      margin={margin}
      padding={padding}>
      {children}
    </CardContainer>
  )
}

export default Card