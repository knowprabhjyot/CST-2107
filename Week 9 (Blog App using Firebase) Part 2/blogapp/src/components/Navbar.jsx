import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { signOut } from 'firebase/auth';
import { auth } from '../config/config';
import Notification from './Notification';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const [user, setUser] = useLocalStorage('user', null);
    const [notificationObject, setNotificationObject] = useState({
        message: "",
        open: false
    });

    const logout = () => {
        signOut(auth).then(() => {
            setNotificationObject({...notificationObject, message: "Logged out succesfully.", open: true})
            setTimeout(() => {
                setUser(null);
                navigate('/');
            }, 2000);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <Box marginBottom="20px">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Hello, {user?.email}
                    </Typography>

                    <Button variant='contained' color='error' onClick={logout}>
                        Logout
                    </Button>
                </Toolbar>

            </AppBar>

            <Notification message={notificationObject.message} open={notificationObject.open} />
        </Box>
    )
}
