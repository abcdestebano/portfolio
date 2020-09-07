import styled from 'styled-components';

export const TechnologiesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 5vw;
`

export const TechnologiesContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
`
export const TechnologyImage = styled.img`
  width: ${props => props.width};
  src: url(${props => props.src});
`