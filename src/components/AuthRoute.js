import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import useAuth from 'utils/hooks/useAuth'

function AuthRoute({ component: Component, ...props }) {
  const { authTokens } = useAuth()

  return (
    <Route
      {...props}
      render={(props) => (
        authTokens ? <Redirect to='/' /> : <Component {...props} />
      )}
    />
  )
}

export default AuthRoute
