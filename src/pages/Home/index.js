import React, { Component, Fragment } from 'react'

import { HomeContainer } from './styles'

import Info from './components/Info'
import Introduction from './components/Introduction'

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Info />
        <Introduction />
      </HomeContainer>
    )
  }
}

export default Home