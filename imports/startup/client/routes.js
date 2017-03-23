import React from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import { Meteor } from 'meteor/meteor'
import App from '../../ui/layouts/App.js'
import Index from '../../ui/pages/Index.js'

Meteor.startup(() => {
  const history = createBrowserHistory()
  render(
    <Router history={history}>
      <App>
        <Route exact path='/' component={Index} />
      </App>
    </Router>,
    document.getElementById('react-root')
  )
})
