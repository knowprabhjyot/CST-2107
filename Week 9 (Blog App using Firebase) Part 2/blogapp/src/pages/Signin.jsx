import Box from '@mui/material/Box';
import { Button, Divider, TextField, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from '../config/config';
import { useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import { getAuthErrorCode } from '../utils/util';
import Notification from '../components/Notification';

export default function SignInPage() {

    const [userInfo, setUserInfo] = useState({});
    const [openNotification, setOpenNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [user, setUser] = useLocalStorage('user', null);
    const navigate = useNavigate();


    const handleSignInWithGoogle = () => {
        signInWithPopup(auth, googleProvider).then((response) => {
            setUser(response.user);
            setOpenNotification(true);
            setNotificationMessage('User Succesfully logged in');
            setTimeout(() => {
                setOpenNotification(false);
                navigate('/');
            }, [2000]) 
        }).catch((error) => {
            setOpenNotification(true);
            const errorMessage = getAuthErrorCode(error.code);
            setNotificationMessage(errorMessage);
            setTimeout(() => {
                setOpenNotification(false);
            }, [2000]) 
        })
    }

    const handleSignInWithEmailAndPassword = () => {
        signInWithEmailAndPassword(auth, userInfo.email, userInfo.password).then((response) => {
            setUser(response.user);
            setOpenNotification(true);
            setNotificationMessage('User Logged in');
            setTimeout(() => {
                setOpenNotification(false);
                navigate('/');
            }, [2000]) 
        }).catch((error) => {
            setOpenNotification(true);
            const errorMessage = getAuthErrorCode(error.code);
            setNotificationMessage(errorMessage);
            setTimeout(() => {
                setOpenNotification(false);
            }, [2000]) 
        })
    }

    return (
        <Box display='flex' flexDirection="column" justifyContent='center' alignItems="center" textAlign="center">
            <Typography variant="h4">Login</Typography>
            <Box padding="20px" border="1px solid #e6e4e4" display='flex' flexDirection="column" gap="20px">
                <TextField value={userInfo.email} type='text' placeholder='Enter Your Email' onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} />
                <TextField value={userInfo.password} type='password' placeholder='Enter Your Password' onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })} />
                <Button variant='contained' onClick={handleSignInWithEmailAndPassword}>SignIn</Button>

                <Divider />
                <Typography>Or signin using</Typography>
                <Button variant="contained" onClick={handleSignInWithGoogle}>
                    <GoogleIcon />
                    Sign In With Google</Button>
            </Box>
            <Notification open={openNotification} message={notificationMessage} />
        </Box>
    )
}
