import AuthConstants from 'context/Auth/AuthConstants'

const AuthReducer = (state, action) => {
  switch (action.type) {
    case AuthConstants.LOGIN_SUCCESS:
      localStorage.setItem('token', JSON.stringify(action.payload))
      return { ...state, token: action.payload }
    case AuthConstants.LOGIN_FAIL:
      return { ...state, error: action.payload }
    default:
      throw new Error()
  }
}

export default AuthReducer
