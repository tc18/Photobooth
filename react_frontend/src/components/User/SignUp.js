import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';
import { API_URL } from './../../config/config'; // Adjust the path if necessary

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit1 = async (e) => {
        e.preventDefault();
        console.log('Form data:', formData);

        try {
            const response = await axios.post(`${API_URL}/users`, formData);
            console.log('User registered:', response.data);
            navigate('/dashboard');
        } catch (error) {
            console.error('Error during sign-up:', error);
        }
    };

    return (
        <div>
            <Box
                component="form"
                onSubmit={handleSubmit1}
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
                    Sign Up
                </Typography>
                <TextField
                    label="Username"
                    name="username"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.username}
                    onChange={handleChange}
                />
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
                    Sign Up
                </Button>
            </Box>
        </div>
    );
};

export default SignUp;
