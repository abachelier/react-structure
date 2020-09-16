import UserConstants from 'context/User/UserConstants'

const UserReducer = (state, action) => {
  switch (action.type) {
    case UserConstants.FETCH_USER:
      return { ...state, user: action.payload }
    default:
      throw new Error()
  }
}

export default UserReducer