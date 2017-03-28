import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Meteor } from 'meteor/meteor'
import { Provider } from 'react-redux'
import App from '../../ui/layouts/App.js'
import Index from '../../ui/pages/Index.js'
import NotFound from '../../ui/pages/NotFound'
import UnsubscribeNewsletter from '../../ui/pages/UnsubscribeNewsletter'
import Store from './store'

Meteor.startup(() => {
  render(
    <Provider store={Store}>
      <Router>
        <App>
          <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path='/unsubscribe/:id' component={UnsubscribeNewsletter} />
            <Route component={NotFound} />
          </Switch>
        </App>
      </Router>
    </Provider>,
    document.getElementById('react-root')
  )
})
