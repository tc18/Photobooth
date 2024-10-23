import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SignUp from './SignUp';
import { TextField, Button, Box, Typography } from '@mui/material';

const SignIn = () => {
    const navigate = useNavigate(); // Get the navigate function from useNavigate

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const SignUp = () => {
        navigate('/signup')
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        try {
            const response = await axios.post('/auth/signin', formData);
            console.log('User signed in:', response.data);
            sessionStorage.setItem('user', JSON.stringify(response.data));
            navigate('/dashboard');
        } catch (error) {
            console.error('Error during sign-in:', error);
        }
    };

    return (
        <div>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    maxWidth: 400,
                    margin: 'auto',
                    padding: 3,
                    border: '1px solid #ccc',
                    borderRadius: 2,
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Typography variant="h5" component="h2" textAlign="center" gutterBottom>
                    Sign In
                </Typography>
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.password}
                    onChange={handleChange}
                />
                <Button variant="contained" color="primary" type="submit" fullWidth>
                    Sign In
                </Button>


                <Typography variant="h6" component="h4" textAlign="center" gutterBottom>
                    Not a user? Sign up!
                </Typography>
                <Button variant="contained" onClick={SignUp}>Sign Up</Button>
            </Box>

        </div>
    );
};

export default SignIn;
