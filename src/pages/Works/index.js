import React, { Component } from 'react'

import Work from './components/Work'
import { WorksContainer } from './styles'

import platzi from '../../assets/platzi.png'
import tokenSport from '../../assets/token_sport.png'
import freelo from '../../assets/freelo.png'
import xtremeVisual from '../../assets/xtreme_visual.jpg'
import pappcorn from '../../assets/pappcorn.png'
import publicar from '../../assets/publicar.png'

const WORKS = [
  { name: 'Platzi', image: platzi },
  { name: 'Token Sport', image: tokenSport },
  { name: 'Freelo', image: freelo },
  { name: 'Xtreme Visual', image: xtremeVisual },
  { name: 'Pappcorn', image: pappcorn },
  { name: 'Publicar', image: publicar },
]

class Works extends Component {
  render() {
    return (
      <WorksContainer>
        {WORKS.map((work, index) => (
          <Work
            key={index}
            image={work.image}
            name={work.name}
            widthImage="90px" />
        ))}
      </WorksContainer>
    )
  }
}

export default Works