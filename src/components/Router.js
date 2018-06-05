import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login'
import PageNotFound from './PageNotFound'

const Router = () => (
  <BrowserRouter>
    {/* Switch tries different routes */}
    <Switch>
      <Route exact path="/" component={Login} />
      {/* 404 default */}
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router
