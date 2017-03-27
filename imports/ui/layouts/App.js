import React from 'react'
import AppNavigationContainer from '../containers/AppNavigationContainer'

const App = ({ children }) => (
  <div>
    <AppNavigationContainer />
    <div>
      { children }
    </div>
  </div>
)

App.propTypes = {
  children: React.PropTypes.node
}

export default App
