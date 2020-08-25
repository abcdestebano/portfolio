import styled from 'styled-components'

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 42px;
`

export const NavbarIcon = styled.div`
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 50%;
  font-size: 20px;
  font-weight: 800;
  color: white;
`

export const NavbarItem = styled.span`
  font-size: 20px;
  color: ${({ isActive, theme }) => isActive ? theme.primary : theme.textGreyTwo};
  font-weight: bold;
  margin-right: 24px;
  cursor: pointer;
`

export const NavbarItemsContainer = styled.div`
  display: flex;
  align-items: center;
`