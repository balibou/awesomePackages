/* global Meteor:true */
import React from 'react'
import { Link } from 'react-router-dom'
import AccountsUIWrapper from '../components/AccountsUIWrapper'

const AppNavigation = ({userReady}) => (
  <nav className='nav'>
    <div className='nav-left'>
      <div className='nav-item'>
        <Link to='/'>Awesome Packages</Link>
      </div>
    </div>
    <div className='nav-right'>
      <div className='nav-item'>
        {userReady
          ? <a className='nav-item' onClick={() => Meteor.logout()}>Logout</a>
          : <AccountsUIWrapper />
        }
      </div>
    </div>
  </nav>
)

AppNavigation.propTypes = {
  userReady: React.PropTypes.bool
}

export default AppNavigation
