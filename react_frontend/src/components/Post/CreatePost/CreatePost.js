import React, { useState } from 'react';
import axios from 'axios';
import { Grid, Box, Card, CardMedia, CardContent, Typography, Button, TextField } from '@mui/material';

const CreatePost = () => {
    const [caption, setCaption] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleUpload().then(async (imageUrl) => {
            const user = JSON.parse(sessionStorage.getItem('user'));
            try {
                const response = await axios.post('/posts', {
                    user,
                    caption,
                    imageUrl
                });
                console.log('Post created:', response.data);
                // Optionally reset the form or show success message
                setCaption('');
                setImageUrl('');
            } catch (error) {
                console.error('Error creating post:', error);
            }
        });
        
    };

    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('/api/images/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Image uploaded successfully:', response.data);
            console.log(response.data.imageUrl)
            setImageUrl(response.data.imageUrl)
            console.log(imageUrl)
            return response.data.imageUrl

        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', width: '400px', margin: 'auto' }}
        >
            <TextField
                label="Caption"
                variant="outlined"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                required
                sx={{ marginBottom: 2 }} // Add some spacing
            />
            <input
                accept="image/*"
                type="file"
                onChange={handleFileChange}
                required
                style={{ marginBottom: '16px' }} // Add some spacing
            />
            {imageUrl && (
                <Box sx={{ marginBottom: 2 }}>
                    <Typography variant="body2">Preview:</Typography>
                    <img src={imageUrl} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                </Box>
            )}
            <Button type="submit" variant="contained" color="primary">
                Create Post
            </Button>
        </Box>
    );
};

export default CreatePost;
