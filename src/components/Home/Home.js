import React, { useEffect } from 'react'
import useAuth from 'hooks/useAuth'
import Button from '@material-ui/core/Button'

const Home = ({ history }) => {
  const { authState, logout } = useAuth()

  useEffect(() => {
    if (!authState.token) {
      history.push('/login')
    }
  }, [authState])

  return <>
    <h1>Home Page</h1>
    <Button onClick={logout}>Log out</Button>
  </>
}

export default Home
