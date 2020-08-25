import React from 'react'
import { SwitchContainer, SwitchOption } from './styles'
import { DARK } from '../../config/theme'

const Switch = ({ themeToggler, theme }) => {

  const isDarkTheme = theme === DARK

  return (
    <SwitchContainer isDarkTheme={isDarkTheme} onClick={themeToggler}>
      <SwitchOption isDarkTheme={isDarkTheme}>
        {isDarkTheme ? "🌝" : "🌚"}
      </SwitchOption>
    </SwitchContainer>
  )
}

export default Switch