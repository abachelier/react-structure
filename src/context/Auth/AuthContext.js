import React, { createContext, useReducer } from 'react'
import AuthReducer from 'context/Auth/AuthReducer'
import { wsLogin } from 'services/AuthServices'
import AuthConstants from 'context/Auth/AuthConstants'

const initialState = {
  token: localStorage.getItem('token'),
  error: null
}

const AuthContext = createContext()
const { Provider } = AuthContext

const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, initialState)

  const actions = {
    login: credentials => wsLogin(credentials, dispatch),
    logout: () => dispatch({ type: AuthConstants.LOGOUT })
  }

  return <Provider value={{ authState, ...actions }}>{children}</Provider>
}

export { AuthContext, AuthProvider }
