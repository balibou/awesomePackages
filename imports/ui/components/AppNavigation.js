import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavGroup, NavItem } from 're-bulma'

const AppNavigation = () => (
  <Nav>
    <NavGroup align='left'>
      <NavItem>
        <Link to='/'>Awesome Packages</Link>
      </NavItem>
    </NavGroup>
  </Nav>
)

export default AppNavigation
