import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignInScreen from './SignInScreen'
import App from './App'
import HomePage from './HomePage'
import PageNotFound from './PageNotFound'
import { isAuthenticated } from '../base'

const Router = () => (
  <BrowserRouter>
    {/* Switch tries different routes */}
    <Switch>
      <Route exactly pattern="/" component={App} />
      {/* <Route path="/feed/" component={App} /> */}
      {/* 404 default */}
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router
