import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import useAuth from 'hooks/useAuth'

// Material UI
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'

const Login = ({ history }) => {
  const { authState, login } = useAuth()
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (authState.token) {
      history.push('/')
    }
    setIsLoading(false)
  }, [authState])

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget
    setCredentials({ ...credentials, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setIsLoading(true)
    login(credentials)
  }

  return (
    <Container maxWidth='sm'>
      <Typography component='h1'>Login Page</Typography>
      {authState.error && <Typography component='p'>{authState.error}</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField id='email' name='email' label='Email' type='email' fullWidth value={credentials.email} onChange={handleChange} />
        <TextField id='password' name='password' label='Password' type='password' fullWidth value={credentials.password} onChange={handleChange} />
        <br /><br />
        <Button variant='contained' color='primary' type='submit' disabled={isLoading}>
          {isLoading && <CircularProgress size={30} />}
          Primary
        </Button>
      </form>
      <Button component={Link} to='/signup'>Sign up page</Button>
    </Container>
  )
}

export default Login
