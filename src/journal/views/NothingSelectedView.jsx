import React from 'react'
import { Grid, Typography,Link } from '@mui/material'
import { StarOutline } from '@mui/icons-material'

export const NothingSelectedView = () => {
  return (
    <Grid 
    container 
    spacing={0} 
    direction="column" 
    alignItems="center" 
    justifyContent="center" 
    sx={{ minHeight: `calc(100vh - 110px)`, backgroundColor: "primary.main" , borderRadius: 4}}
    >
        <Grid item xs={12}>
            <StarOutline sx={{fontSize:"100px", color:"white"}}/>
        </Grid>
        <Grid item xs={12}>
            <Typography variant='h5' sx={{ marginBottom: 1, color:"white" }}>Selecciona o crear una entrada</Typography>
        </Grid>

    </Grid>
  )
}
