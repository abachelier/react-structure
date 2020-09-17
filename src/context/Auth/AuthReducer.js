import AuthConstants from 'context/Auth/AuthConstants'

const AuthReducer = (state, action) => {
  switch (action.type) {
    case AuthConstants.LOGIN_SUCCESS:
      return { ...state, token: action.payload }
    case AuthConstants.LOGIN_FAIL:
      return { ...state, error: action.payload }
    case AuthConstants.LOGOUT:
      return { ...state, token: null }
    default:
      throw new Error()
  }
}

export default AuthReducer
