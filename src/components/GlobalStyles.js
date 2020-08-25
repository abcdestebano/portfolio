import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    font-family: 'Nunito', sans-serif;
    transition: all 100ms linear;
  }
`