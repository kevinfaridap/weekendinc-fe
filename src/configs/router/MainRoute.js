import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../../pages/Main/Home'

function MainRoute() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default MainRoute
