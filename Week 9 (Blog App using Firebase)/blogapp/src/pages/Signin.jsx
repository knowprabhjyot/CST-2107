import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from '../config/config';
import { useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';

export default function SignInPage() {

    const [userInfo, setUserInfo] = useState();
    const [value, setValue] = useLocalStorage('user', null);
    const navigate = useNavigate();

    // Facebook Firebase Login

    useEffect(() => {
        if (userInfo) {
            navigate('/home');
        }
    }, [navigate, userInfo])

    const handleLogin = () => {
        signInWithPopup(auth, provider).then((response) => {
            console.log(response.user, 'user info');
            setUserInfo(response.user);
            setValue(response.user);
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <Box>
            <Button variant="contained" onClick={handleLogin}>
                <GoogleIcon />
                Sign in With Google</Button>
        </Box>
    )
}
