import React from 'react'

import {
  InfoContainer,
  Image,
  Name,
  BoxLine,
  IconSocial,
  NameContainer
} from './styles'

import linkedin from '../../../../assets/linkedin.svg'
import twitter from '../../../../assets/twitter.svg'

const Info = () => {
  return (
    <InfoContainer>
      <Image />
      <NameContainer>
        <Name>Juan</Name>
        <Name>Aragón</Name>
        <BoxLine />
        <div>
          <a href="https://www.linkedin.com/in/juan-esteban-aragon-montealegre-7134a0115/" target="blank">
            <IconSocial src={linkedin} />
          </a>
          <a href="https://twitter.com/abcdestebano" target="blank">
            <IconSocial src={twitter} />
          </a>
        </div>
      </NameContainer>
    </InfoContainer>
  )
}

export default Info