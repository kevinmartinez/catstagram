import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login'
import App from './App'
import PageNotFound from './PageNotFound'

const Router = () => (
  <BrowserRouter>
    {/* Switch tries different routes */}
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/feed/:userId" component={App} />
      {/* 404 default */}
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router
