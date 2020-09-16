import React, { useEffect } from 'react'
import useAuth from 'hooks/useAuth'
import useUser from 'hooks/useUser'
import Button from '@material-ui/core/Button'

const Home = ({ history }) => {
  const { authState, logout } = useAuth()
  const { userState, fetchUser } = useUser()

  useEffect(() => {
    if (!authState.token) {
      history.push('/login')
    }
  }, [authState])

  useEffect(() => {
    // TODO: id in authState ?
    fetchUser(2)
  })

  return <>
    <h1>Home Page</h1>
    <p>{userState.user.data && userState.user.data.email}</p>
    <Button onClick={logout}>Log out</Button>
  </>
}

export default Home
