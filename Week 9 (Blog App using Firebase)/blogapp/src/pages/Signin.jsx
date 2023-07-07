import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from '../config/config';
import { useState } from 'react';

export default function SignInPage() {

    const [userInfo, setUserInfo] = useState();

    // Facebook Firebase Login

    const handleLogin = () => {
        signInWithPopup(auth, provider).then((response) => {
            console.log(response.user, 'user info');
            setUserInfo(response.user);
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <Box>
            {
                userInfo.email
            }
            <Button variant="contained" onClick={handleLogin}>
                <GoogleIcon />
                Sign in With Google</Button>
        </Box>
    )
}
