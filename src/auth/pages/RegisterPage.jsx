import { Google } from '@mui/icons-material'
import { Button, Grid, TextField, Typography, Link, Alert } from '@mui/material'
import { Link as LinkRouter } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import React, { useMemo, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks'

const formData = {
  displayName: '',
  email: '',
  password: ''
}

const formValidations = {
  email: [(value) => value.includes("@"), "El email debe de tener un @"],
  password: [(value) => value.length >= 6, "La contraseña debe de ser mayor a 6 caracteres"],
  displayName: [(value) => value.length >= 1, "El nombre es requerido"]
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const {formState, displayName, email, password, onInputChange, displayNameValid, emailValid, passwordValid, isFormValid } = useForm(formData, formValidations);

  const [formSubmited,setFormSubmited]= useState(false);  

  const {status,error} = useSelector(state=>state.auth);
  const isCheckingAuthentication = useMemo(()=>status==='checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmited(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState));
    console.log(status,error);
  }

  return (
    <AuthLayout title='Crear Cuenta'>
      <form onSubmit={onSubmit}         className='animate__animated animate__fadeIn animate__faster'
>
        <Grid container>
          <Grid item xs={12} sx={{ marginBottom: 3 }}>
            <TextField
              error={!!displayNameValid && formSubmited}
              helperText={displayNameValid}
              name='displayName'
              value={displayName} onChange={onInputChange} label="Nombre Completo" type='text' placeholder='Nombre Completo' fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: 3 }}>
            <TextField
              error={!!emailValid && formSubmited}
              helperText={emailValid}
              name='email'
              value={email}
              onChange={onInputChange} label="Correo" type='email' placeholder='Correo@google.com' fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={!!passwordValid && formSubmited}
              helperText={passwordValid}
              name='password'
              value={password}
              onChange={onInputChange} label="Contraseña" type='password' placeholder='Password' fullWidth />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
             <Grid item xs={12} display={!!error ? '' : 'none'}>
              <Alert severity="error">{error}</Alert>
            </Grid>

            <Grid item xs={12}>
              <Button disabled={!isFormValid && isCheckingAuthentication} type="submit" variant="contained" fullWidth>
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
