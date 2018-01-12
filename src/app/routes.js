import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App.jsx'
import NotFoundPage from './components/NotFoundPage.jsx'

const routes = (
  <Route path="/" component={App}>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;