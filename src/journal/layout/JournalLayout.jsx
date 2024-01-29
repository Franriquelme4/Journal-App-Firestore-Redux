import { Box } from '@mui/system'
import React from 'react'
import { NavBar, SideBar } from '../components';
import { Toolbar } from '@mui/material';

export const JournalLayout = ({children}) => {
    const drawerWidth = 240;
    return (
        <Box sx={{ display: "flex" }}>
            {/* NavBar */}
            <NavBar drawerWidth={drawerWidth}/>
            {/* SideBar */}
            <SideBar drawerWidth={drawerWidth}/>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3 }}
            >
                <Toolbar/>
                {children}
            </Box>
        </Box>
    )
}
