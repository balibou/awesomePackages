import React from 'react'
import AppNavigation from '../components/AppNavigation.js'

const App = ({ children }) => (
  <div>
    <AppNavigation />
    <div>
      { children }
    </div>
  </div>
)

App.propTypes = {
  children: React.PropTypes.node
}

export default App
