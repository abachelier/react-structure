import React from 'react'
import useAuth from 'utils/hooks/useAuth'
import Button from '@material-ui/core/Button'

const Home = ({ history }) => {
  const { setAuthTokens } = useAuth()

  const logout = () => {
    setAuthTokens()
    localStorage.removeItem('tokens')
    history.push('/login')
  }

  return <>
    <h1>Home Page</h1>
    <Button onClick={logout}>Log out</Button>
  </>
}

export default Home
