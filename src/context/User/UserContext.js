import React, { createContext, useReducer } from 'react'
import UserReducer from 'context/User/UserReducer'
import { wsFetchUser } from 'services/UserServices'

const initialState = {
  user: {}
}

const UserContext = createContext()
const { Provider } = UserContext

const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(UserReducer, initialState)

  const actions = {
    fetchUser: id => wsFetchUser(id, dispatch)
  }

  return <Provider value={{ userState, ...actions }}>{children}</Provider>
}

export { UserContext, UserProvider }