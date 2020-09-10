import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import AppNav from './components/AppNav'
import Login from './components/Login'
import RankingBoard from './components/RankingBoard'
import Quiz from './components/Quiz'
import Home from './components/Home'
import { Container } from 'react-bootstrap'
import InfomationForm from './components/InfomationForm'
import { PrivateRoute } from './components/PrivateRoute'

function App() {
  return (
    <>
      <Router>
        <AppNav />
        <Container className="mt-4">
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/login" component={Login} />

            <PrivateRoute path="/info-form" component={InfomationForm} />

            <Route path="/ranking" component={RankingBoard} />

            <PrivateRoute path="/quiz" component={Quiz} />
            <Redirect from="*" to="/" />
          </Switch>
        </Container>
      </Router>
    </>
  )
}

export default App
