import React from 'react'
import {
  IntroductionContainer,
  IntroductionTitle,
  IntroductionSubtitle,
  IntroductionText
} from './styles'

import Card from '../../../../components/Card'
import Technologies from '../Technologies'

const Introduction = () => (
  <IntroductionContainer>
    <Card width="35vw" height="26vw" padding="4vw">
      <IntroductionTitle>Introduction</IntroductionTitle>
      <IntroductionSubtitle>
        Mobile Developer
      </IntroductionSubtitle>
      <IntroductionText>
        Software lover, autodidact,
        with spirit of helping people, creating technology
        that improves the quality of their lives.
      </IntroductionText>
    </Card>

    <Technologies />
  </IntroductionContainer>
)

export default Introduction