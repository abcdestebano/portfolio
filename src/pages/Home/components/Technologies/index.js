import React from 'react'
import { TechnologiesContainer, TechnologiesContainerImage, TechnologyImage } from './styles'
import Card from '../../../../components/Card'
import react from '../../../../assets/react.png'
import android from '../../../../assets/android.png'
import flutter from '../../../../assets/flutter.png'
import kotlin from '../../../../assets/kotlin.png'


const listTechnologies = [
  android,
  kotlin,
  react,
  flutter
]

const Technologies = () => {
  return (
    <TechnologiesContainer>

      <Card
        width="6vw"
        height="6vw">
        <TechnologiesContainerImage>
          <TechnologyImage src={android} width="5vw" />
        </TechnologiesContainerImage>
      </Card>

      <Card
        width="6vw"
        height="6vw">
        <TechnologiesContainerImage>
          <TechnologyImage src={kotlin} width="2vw" />
        </TechnologiesContainerImage>
      </Card>

      <Card
        width="6vw"
        height="6vw">
        <TechnologiesContainerImage>
          <TechnologyImage src={react} width="3vw" />
        </TechnologiesContainerImage>
      </Card>

      <Card
        width="6vw"
        height="6vw">
        <TechnologiesContainerImage>
          <TechnologyImage src={flutter} width="4vw" />
        </TechnologiesContainerImage>
      </Card>

    </TechnologiesContainer>
  );
}

export default Technologies