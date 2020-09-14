import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import useAuth from 'hooks/useAuth'

function AuthRoute ({ component: Component, ...props }) {
  const { authState } = useAuth()

  return (
    <Route
      {...props}
      render={(props) => (
        authState.token ? <Redirect to='/' /> : <Component {...props} />
      )}
    />
  )
}

export default AuthRoute
