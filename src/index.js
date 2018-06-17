import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exactly pattern="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
