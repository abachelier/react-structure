import React, { createContext, useReducer } from 'react'
import AuthReducer from 'context/Auth/AuthReducer'
import { wsLogin, wsLogout } from 'services/AuthServices'

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
    logout: () => wsLogout(dispatch)
  }

  return <Provider value={{ authState, ...actions }}>{children}</Provider>
}

export { AuthContext, AuthProvider }
