import { useContext } from 'react'
import { AuthContext } from 'context/Auth/AuthContext'

const useAuth = () => {
  return useContext(AuthContext)
}

export default useAuth
