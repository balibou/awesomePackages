import React from 'react'
import { Link } from 'react-router-dom'

const AppNavigation = () => (
  <nav className='nav'>
    <div className='nav-left'>
      <div className='nav-item'>
        <Link to='/'>Awesome Packages</Link>
      </div>
    </div>
  </nav>
)

export default AppNavigation
