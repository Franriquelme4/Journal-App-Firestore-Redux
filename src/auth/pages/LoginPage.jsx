import { useDispatch, useSelector } from 'react-redux'
import { Google } from '@mui/icons-material'
import { Button, Grid, TextField, Typography, Link, Alert } from '@mui/material'
import { Link as LinkRouter } from 'react-router-dom'
import React, { useMemo } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { chekingAutentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth'



export const LoginPage = () => {

  const { status, error } = useSelector(state => state.auth);

  const isAutenticating = useMemo(() => status === 'checking', [status]);

  const dispatch = useDispatch();

  const { formState, email, password, onInputChange } = useForm({
    email: '',
    password: ''
  });

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword(formState));
    console.log('submit');
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
    console.log('google');
  }

  return (
    <AuthLayout title='Login' >
      <form onSubmit={onSubmit}className='animate__animated animate__fadeIn animate__faster'>
        <Grid container>
          <Grid item xs={12} sx={{ marginBottom: 3 }}>
            <TextField name='email' value={email} onChange={onInputChange} label="Correo" type='email' placeholder='correo@google.com' fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField name='password' value={password} onChange={onInputChange} label="Contraseña" type='password' placeholder='Password' fullWidth />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button disabled={isAutenticating} type='submit' variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button disabled={isAutenticating} onClick={onGoogleSignIn} variant="contained" fullWidth>
                <Google /> <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ mb: 2, mt: 2 }} display={!!error ? '' : 'none'}>
              <Alert severity="error">{error}</Alert>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={LinkRouter} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
