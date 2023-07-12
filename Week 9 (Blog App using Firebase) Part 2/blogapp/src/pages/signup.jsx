import Box from '@mui/material/Box';
import { Button, Divider, TextField, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { createUserWithEmailAndPassword, signInWithPopup, AuthErrorCodes } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth, googleProvider } from '../config/config';
import useLocalStorage from '../hooks/useLocalStorage';
import Notification from '../components/Notification';
import { useNavigate } from 'react-router-dom';
import { getAuthErrorCode } from '../utils/util';
export default function SignupPage() {

    // const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({});
    const [openNotification, setOpenNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const navigate = useNavigate();
    useEffect(() => {

    }, [])

    const handleSignupWithGoogle = () => {
        signInWithPopup(auth, googleProvider).then((response) => {
            // setUser(response.user);
            setOpenNotification(true);
            setNotificationMessage('Your Account is created');
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

    const handleSignupWithEmailAndPassword = () => {
        createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password).then((response) => {
            // setUser(response.user);
            setOpenNotification(true);
            setNotificationMessage('Your Account is created');
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
        <Box display='flex' flexDirection="column" justifyContent='center' alignItems="center">
            <Typography variant="h4">Signup</Typography>

            <Box padding="20px" border="1px solid #e6e4e4" display='flex' flexDirection="column" gap="20px">
                <TextField value={userInfo.email} type='text' placeholder='Enter Your Email' onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} />
                <TextField value={userInfo.password} type='password' placeholder='Enter Your Password' onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })} />
                <Button variant='contained' onClick={handleSignupWithEmailAndPassword}>Signup</Button>

                <Divider />
                <Typography>Or signup using</Typography>
                <Button variant="contained" onClick={handleSignupWithGoogle}>
                    <GoogleIcon />
                    Sign Up With Google</Button>
            </Box>
            <Notification open={openNotification} message={notificationMessage} />
        </Box>
    )
}
