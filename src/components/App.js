import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from 'components/Home'
import Login from 'components/Login'
import PrivateRoute from './PrivateRoute'
import AuthRoute from './AuthRoute'
import AuthContext from 'context/AuthContext'

const App = () => {
  return (
    <AuthContext.Provider value={false}>
      <Router>
        <PrivateRoute exact path='/' component={Home} />
        <AuthRoute path='/login' component={Login} />
      </Router>
    </AuthContext.Provider>
  )
}

export default App
