import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundCard};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-shadow: 0 3px 6px ${({ theme }) => theme.colorShadow};
  border-radius: 26px;
  box-sizing: border-box;
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`
