import axios from 'axios'
import { API_URL } from 'config'
import UserConstants from 'context/User/UserConstants'

export const wsFetchUser = (id, dispatch) => {
  axios.get(API_URL + '/users/' + id)
    .then(response => dispatch({
      type: UserConstants.FETCH_USER,
      payload: response.data
    }))
}