import styled from 'styled-components'

export const WorkContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
`

export const WorkName = styled.span`
  font-size: 26px;
  color: ${({ theme }) => theme.text};
  font-weight: 800;
`

export const WorkImage = styled.img`
  width: ${props => props.width};
  src: url(${props => props.src});
  border-radius: 20px;
  margin-right: 1.5vw;
`