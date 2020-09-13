import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import useAuth from 'utils/hooks/useAuth'

function PrivateRoute({ component: Component, ...props }) {
  const { authTokens } = useAuth()

  return (
    <Route
      {...props}
      render={(props) => (
        authTokens ? <Component {...props} /> : <Redirect to='/login' />
      )}
    />
  )
}

export default PrivateRoute
