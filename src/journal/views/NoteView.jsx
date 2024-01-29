import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImageGallery } from '../components'

export const NoteView = () => {
    return (
        <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ marginBottom: 1 }}>
            <Grid item>
                <Typography sx={{ fontSize: 39 }} fontWeight="light">28 de agosto, 2023</Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx={{ padding: 2 }}><SaveOutlined sx={{ fontSize: 30, mr: 1 }} />Guardar</Button>
            </Grid>
            <Grid container>
                <TextField type='text' fullWidth placeholder='Titulo' variant="filled" label="Titulo" sx={{ border: "none", mb: 1 }}></TextField>
                <TextField type='text' fullWidth multiline placeholder='Que sucedio hoy ?' variant="filled" label="Descripcion" minRows={5} sx={{ border: "none", mb: 1 }}></TextField>
            </Grid>

            {/* {Galeria de imagenes } */}
            <ImageGallery/>

        </Grid>
    )
}
