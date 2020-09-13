import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from 'components/Home'
import Login from 'components/Login'
import PrivateRoute from './PrivateRoute'
import AuthRoute from './AuthRoute'
import AuthContext from 'context/AuthContext'
import Signup from 'components/Signup'
import './App.scss'

const App = () => {
  const existingTokens = JSON.parse(localStorage.getItem('tokens'))
  const [authTokens, setAuthTokens] = useState(existingTokens)

  const setTokens = data => {
    localStorage.setItem('tokens', JSON.stringify(data))
    setAuthTokens(data)
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <PrivateRoute exact path='/' component={Home} />
        <AuthRoute path='/login' component={Login} />
        <AuthRoute path='/signup' component={Signup} />
      </Router>
    </AuthContext.Provider>
  )
}

export default App
