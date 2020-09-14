import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import useAuth from 'hooks/useAuth'

function PrivateRoute ({ component: Component, ...props }) {
  const { authState } = useAuth()

  return (
    <Route
      {...props}
      render={(props) => (
        authState.token ? <Component {...props} /> : <Redirect to='/login' />
      )}
    />
  )
}

export default PrivateRoute
