import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Box, Card, CardMedia, CardContent, Typography, ImageList, ImageListItem } from '@mui/material';
import Post from "./Post/Post"

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/posts');
                setPosts(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            {/* <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {post.user.username} - {post.caption}
                    </li>
                ))}
            </ul> */}

            {/* <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={2}
                sx={{ marginTop: 4 }}
            >
                {posts.map((post) => (
                    <Card key={post.id} sx={{ maxWidth: 400, width: '100%', boxShadow: 3 }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image={post.imageUrl}
                            alt={post.caption}
                        />
                        <CardContent>
                            <Typography variant="body1" color="textPrimary">
                                {post.user.username} :
                                {post.caption}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box> */}

            {/* <Grid container spacing={2} sx={{ marginTop: 4 }}>
                {posts.map((post) => (
                    <Grid item xs={12} sm={6} md={4} key={post.id}>
                        <Card sx={{ boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image={post.imageUrl}
                                alt={post.caption}
                            />
                            <CardContent>
                                <Typography variant="body1" color="textPrimary">
                                    {post.user.username} : {post.caption}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid> */}

            {/* <ImageList sx={{ width: 1500, height: 900 }} cols={4} rowHeight={600}>
                {posts.map((post) => (
                    <ImageListItem key={post.imageUrl}>
                        <img
                            srcSet={`${post.imageUrl}?w=400&h=600&fit=crop&auto=format&dpr=2 2x`}
                            src={`${post.imageUrl}?w=400&h=600&fit=crop&auto=format`}
                            alt={post.caption}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList> */}

            <Grid container spacing={2}>
                {posts.map((post) => (
                    <Grid item key={post.id} xs={12} sm={6} md={3}>
                        <Post imageUrl={post.imageUrl} caption={post.caption} username={post.user.username} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default PostList;

