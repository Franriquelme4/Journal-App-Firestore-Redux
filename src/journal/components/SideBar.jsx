import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, List, Toolbar, Typography ,ListItem, ListItemButton, ListItemIcon, Grid, ListItemText} from '@mui/material'
import React from 'react'

export const SideBar = ({ drawerWidth = 240 }) => {
    return (
        <Box component="nav"
            sx={{
                width: { sm: drawerWidth },
                flexShrink: { sm: 0 },
            }}>
            <Drawer variant="permanent" open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component="div">Francisco Riquelme</Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",].map(text=>
                        <ListItem disablePadding key={text}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text}/>
                                    <ListItemText secondary="Lorem ipsum dolor sit amet"/>

                                </Grid>
                            </ListItemButton>
                        </ListItem>)
                    }
                </List>

            </Drawer>

        </Box>
    )
}