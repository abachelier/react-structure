import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
// Material UI
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'

const Signup = ({ history }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '', confirmPassword: '' })
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget
    setCredentials({ ...credentials, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setIsLoading(true)

    if (credentials.password === credentials.confirmPassword) {
      axios.post('https://reqres.in/api/register', credentials)
        .then(response => history.push('/login'))
        .catch(e => setHasError(true))
    } else {
      setHasError(true)
    }

    setIsLoading(false)
  }

  return (
    <Container maxWidth="sm">
      <Typography component='h1'>Signup Page</Typography>
      {hasError && <Typography component='p'>Invalid credentials</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField id='email' name='email' label='Email' type='email' fullWidth value={credentials.email} onChange={handleChange} />
        <TextField id='password' name='password' label='Password' type='password' fullWidth value={credentials.password} onChange={handleChange} />
        <TextField id='confirmPassword' name='confirmPassword' label='Confirm Password' type='password' fullWidth value={credentials.confirmPassword} onChange={handleChange} />
        <br /><br />
        <Button variant='contained' color='primary' type='submit' disabled={isLoading}>
          {isLoading && <CircularProgress size={30} />}
          Primary
        </Button>
      </form>
      <Button component={Link} to='/login'>Login page</Button>
    </Container>
  )
}

export default Signup
