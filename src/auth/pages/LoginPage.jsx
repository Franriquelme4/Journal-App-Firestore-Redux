import { Google } from '@mui/icons-material'
import { Button, Grid, TextField, Typography, Link } from '@mui/material'
import { Link as LinkRouter } from 'react-router-dom'
import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'


export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ marginBottom: 3 }}>
            <TextField label="Correo" type='email' placeholder='correo@google.com' fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Contraseña" type='password' placeholder='Password' fullWidth />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Google /> <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
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
