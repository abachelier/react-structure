import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Home from 'components/Home'
import Login from 'components/Login'
import PrivateRoute from './PrivateRoute'
import AuthRoute from './AuthRoute'
import Signup from 'components/Signup'

import { AuthProvider } from 'context/Auth/AuthContext'

import './App.scss'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <PrivateRoute exact path='/' component={Home} />
        <AuthRoute path='/login' component={Login} />
        <AuthRoute path='/signup' component={Signup} />
      </Router>
    </AuthProvider>
  )
}

export default App
