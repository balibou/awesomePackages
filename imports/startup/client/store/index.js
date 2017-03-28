import { applyMiddleware, createStore, compose } from 'redux'
import { createLogger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers'
import DevTools from '../../../ui/components/DevTools'

const logger = createLogger()

const enhancers = [
  applyMiddleware(ReduxThunk, logger),
  DevTools.instrument()
]

const Store = createStore(reducers, {}, compose(...enhancers))

export default Store
