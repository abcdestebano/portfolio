import React from 'react'
import Card from '../../../../components/Card'

import { WorkContainer, WorkImage, WorkName } from './styles'

const Work = ({ image, name, widthImage }) => {
  return (
    <Card
      width="434px"
      height="215px"
      padding="40px">
      <WorkContainer>
        <WorkImage src={image} width={widthImage} />
        <WorkName>{name}</WorkName>
      </WorkContainer>
    </Card>
  )
}

export default Work