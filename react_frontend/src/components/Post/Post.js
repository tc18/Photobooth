import React from 'react';
import { Box, Typography, ImageListItem } from '@mui/material';
import { styled } from '@mui/system';

const PostContainer = styled(Box)({
    position: 'relative',
    width: '300px', // Set your desired width
    margin: '10px',
    overflow: 'hidden',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
});

const Image = styled('img')({
    width: '100%',
    height: 'auto',
    transition: 'transform 0.3s',
    '&:hover': {
        transform: 'scale(1.05)',
    },
});

const Overlay = styled(Box)({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))', // Gradient from 70% opacity to 0%
    color: 'white',
    padding: '10px',
    opacity: 0,
    transition: 'opacity 0.3s',
    '&:hover': {
        opacity: 1,
    },
});

const Post = ({ imageUrl, caption, username }) => {
    return (
        <PostContainer>
            {/* <Image src={imageUrl} alt={caption} /> */}
            <ImageListItem key={imageUrl}>
                <img
                    srcSet={`${imageUrl}?w=300&h=500&fit=crop&auto=format&dpr=2 2x`}
                    src={`${imageUrl}?w=300&h=500&fit=crop&auto=format`}
                    alt={caption}
                    loading="lazy"
                />
            </ImageListItem>
            <Overlay>
                <Typography variant="h6" style={{ textTransform: 'uppercase' }}>{username}</Typography>
                <Typography variant="body2">{caption}</Typography>
            </Overlay>
        </PostContainer>
    );
};

export default Post;
