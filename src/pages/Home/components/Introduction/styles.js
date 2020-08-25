import styled from 'styled-components'

export const IntroductionContainer = styled.div`
    display: flex;
    margin-top: 44px;
    flex-direction: column;
    align-items: flex-end;
    @media (max-width: 1000px) {
        align-items: center;
    }
`

export const IntroductionTitle = styled.div`
  font-size: 1vw;
  color: ${({ theme }) => theme.textGreyOne};
  font-weight: 800;
  margin-top: 1vw;
`

export const IntroductionSubtitle = styled.div`
  font-size: 2.2vw;
  color: ${({ theme }) => theme.text};
  font-weight: 800;
  margin-top: 3vw;
`

export const IntroductionText = styled.div`
  font-size: 1.5vw;
  color: ${({ theme }) => theme.textGreyOne};
  margin-top: 3vw;
`