import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SignUp from './SignUp';
import { TextField, Button, Box, Typography } from '@mui/material';

const SignOut = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        sessionStorage.clear();
        navigate('/')
    }, []);

    return (
        <></>
    );
};

export default SignOut;
