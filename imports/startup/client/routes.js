import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Meteor } from 'meteor/meteor'
import App from '../../ui/layouts/App.js'
import Index from '../../ui/pages/Index.js'
import NotFound from '../../ui/pages/NotFound'
import UnsubscribeNewsletter from '../../ui/pages/UnsubscribeNewsletter'

Meteor.startup(() => {
  render(
    <Router>
      <App>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route exact path='/unsubscribe/:id' component={UnsubscribeNewsletter} />
          <Route component={NotFound} />
        </Switch>
      </App>
    </Router>,
    document.getElementById('react-root')
  )
})
