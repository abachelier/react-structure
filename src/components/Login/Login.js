import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from 'utils/hooks/useAuth'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import axios from 'axios'

const Login = ({ history }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [hasError, setHasError] = useState(false)
  const { setAuthTokens } = useAuth()

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget
    setCredentials({ ...credentials, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios.post('https://reqres.in/api/login', credentials)
      .then(response => {
        if (response.status === 200) {
          setAuthTokens(response.data)
          history.push('/')
        }
        setHasError(true)
      })
      .catch(e => setHasError(true))
  }

  return (
    <Container maxWidth="sm">
      <Typography component='h1'>Login Page</Typography>
      <form onSubmit={handleSubmit}>
        <TextField id='email' name='email' label='Email' type='email' fullWidth value={credentials.email} onChange={handleChange} />
        <TextField id='password' name='password' label='Password' type='password' fullWidth value={credentials.password} onChange={handleChange} />
        <br /><br />
        <Button variant='contained' color='primary' type='submit'>
          Primary
        </Button>
      </form>
      <Button component={Link} to='/signup'>Sign up page</Button>
    </Container>
  )
}

export default Login
