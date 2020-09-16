import { useContext } from 'react'
import { UserContext } from 'context/User/UserContext'

const useUser = () => {
  return useContext(UserContext)
}

export default useUser
