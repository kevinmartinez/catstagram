import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Router from './components/Router'
import registerServiceWorker from './registerServiceWorker'

import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

// Set up redux Provider & connect
// ReactDOM.render(<Router />, document.getElementById('root'))
// registerServiceWorker()
