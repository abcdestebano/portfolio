import React from 'react'
import { useLocation, NavLink } from 'react-router-dom'

import { NavbarContainer, NavbarIcon, NavbarItem, NavbarItemsContainer } from './styles';

import routes from '../../routes'
import Switch from '../Switch';


const Navbar = ({ themeToggler, theme }) => {

  const location = useLocation();

  const isActiveRoute = (routeName) => location.pathname === routeName;

  return (
    <NavbarContainer>

      <NavbarIcon>
        EA
      </NavbarIcon>

      <NavbarItemsContainer>
        {routes.map((route) => (
          <NavLink to={route.path} key={route.path} style={{ textDecoration: 'none' }}>
            <NavbarItem
              isActive={isActiveRoute(route.path)}>
              {route.name}
            </NavbarItem>
          </NavLink>
        ))}
        <Switch themeToggler={themeToggler} theme={theme} />
      </NavbarItemsContainer>

    </NavbarContainer>
  )
}

export default Navbar