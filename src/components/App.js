import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from 'components/Home'
import Login from 'components/Login'
import PrivateRoute from './PrivateRoute'
import AuthRoute from './AuthRoute'
import AuthContext from 'context/AuthContext'
import Signup from 'components/Signup'
import './App.scss'

const App = () => {
  return (
    <AuthContext.Provider value={false}>
      <Router>
        <PrivateRoute exact path='/' component={Home} />
        <AuthRoute path='/login' component={Login} />
        <AuthRoute path='/signup' component={Signup} />
      </Router>
    </AuthContext.Provider>
  )
}

export default App
