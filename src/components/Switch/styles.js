import styled from 'styled-components'

export const SwitchContainer = styled.div`
  width: 52px;
  height: 28px;
  border-radius: 50px;
  background-color: ${({isDarkTheme, theme}) => isDarkTheme ? theme.textGreyTwo : '#FFF'};
  padding: 3px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 1px 3px ${({isDarkTheme}) => isDarkTheme ? "rgb(0 0 0 / 0.16)" : "rgb(33 150 243 / 0.16)" };
  border:  1px solid ${({isDarkTheme}) => isDarkTheme ? "#222222" : "#eeeeee" };
`

export const SwitchOption = styled.span`
  font-size: 1.4em;
  transition: transform 500ms;
  transform: ${({ isDarkTheme }) => isDarkTheme ? 'translateX(100%)' : 'translateX(0px)'};
`