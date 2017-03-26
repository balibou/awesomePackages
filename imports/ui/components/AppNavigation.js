import React from 'react'
import { Link } from 'react-router-dom'
import AccountsUIWrapper from '../components/AccountsUIWrapper';

const AppNavigation = () => (
  <nav className='nav'>
    <div className='nav-left'>
      <div className='nav-item'>
        <Link to='/'>Awesome Packages</Link>
      </div>
    </div>
    <div className='nav-right'>
      <div className='nav-item'>
        <AccountsUIWrapper />
      </div>
    </div>
  </nav>
)

export default AppNavigation
