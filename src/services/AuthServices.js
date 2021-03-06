import axios from 'axios'
import { API_URL } from 'config'
import AuthConstants from 'context/Auth/AuthConstants'

export const wsLogin = (credentials, dispatch) => {
  axios.post(API_URL + '/login', credentials)
    .then(response => {
      localStorage.setItem('token', response.data.token)
      dispatch({ type: AuthConstants.LOGIN_SUCCESS, payload: response.data.token })
    }).catch(error => {
      dispatch({ type: AuthConstants.LOGIN_FAIL, payload: error.response.data.error })
    })
}

export const wsLogout = dispatch => {
  localStorage.removeItem('token')
  dispatch({ type: AuthConstants.LOGOUT })
}