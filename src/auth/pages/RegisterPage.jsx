import { Google } from '@mui/icons-material'
import { Button, Grid, TextField, Typography, Link } from '@mui/material'
import { Link as LinkRouter } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import React from 'react'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear Cuenta'>
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ marginBottom: 3 }}>
            <TextField label="Nombre Completo" type='text' placeholder='Nombre Completo' fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: 3 }}>
            <TextField label="Correo" type='email' placeholder='Correo@google.com' fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Contraseña" type='password' placeholder='Password' fullWidth />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
            <Link component={LinkRouter} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
